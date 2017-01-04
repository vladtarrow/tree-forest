/* exported Classifier */
/* globals PredictHelper, DrawHelper, RenderHelper, Utility, dt */
var Classifier = (function () {
    'use strict';
    var Classifier = {
        type: 'classification',
        criterion: 'id3',//Default,
        algorithm: 'decision-tree',//Default [decision-tree|decision-forest-bagging]
        trainingData: gener1_examples,//Default,
        trainingFeatures: getFeatures(gener1_examples),//Default,
        testData: gener1_samples,//Default,
        model: null,
        prediction: null,
        categoryAttr: 'classification'
    };
    var enabledCriterions = [
        "id3",
        "cart",
        "listbb"
    ];

    function checkCriterion(criterion) {
        for (var i = 0; i < enabledCriterions.length; i++) {
            if (enabledCriterions[i] === criterion) {
                return true;
            }
        }
        return false;
    }

    function getFeatures(data) {
        var features = [];
        var featuresData = data[0];
        for (var key in featuresData) {
            if (featuresData.hasOwnProperty(key) && key !== "classification") {
                features.push(key);
            }
        }
        return features;
    }

    /*
     * splitInfo [0.7,0.3] разбиение обучающей выборки - по умолчанию, когда не задана testData
     * */
    Classifier.setProperties = function (criterion, trainingData, testData, splitInfo, algorithm) {
        if (checkCriterion(criterion)) {
            this.criterion = criterion;
        }
        if (trainingData && trainingData instanceof Object) {
            this.trainingData = trainingData;
            this.trainingFeatures = getFeatures(this.trainingData);
        }
        if (testData && testData instanceof Object) {
            this.testData = testData;
        }
        if (splitInfo && splitInfo instanceof Array) {
            this.trainingData = Utility.shuffle(this.trainingData);
            var tmp = this.trainingData;
            var trainingLength = splitInfo[0] * tmp;
            this.trainingData = tmp.slice(0, trainingLength);
            this.testData = tmp.slice(trainingLength);
        }
        if (algorithm) {
            this.algorithm = algorithm;
        }
    };

    Classifier.generateModel = function () {
        // Configuration
        var config = {
            trainingSet: this.trainingData,
            categoryAttr: this.categoryAttr,
            ignoredAttributes: [],
            criterion: this.criterion
        };

        switch (this.algorithm) {
            case 'decision-tree':
                this.model = new dt.DecisionTree(config);//ClassifierHelper.classificate(this.trainingData, this.type, this.trainingFeatures, this.criterion);
                break;
            case 'decision-forest-bagging':
                this.model = new dt.RandomForest(config, 3);//также можно указывать число деревьев//default=3
                break;
            case 'decision-forest-incompetence':
                this.model = new dt.DecisionForest(config, 10, 5);//maxTreesNumber=10, maxTreesDepth=5
                break;
        }

        return this.model;
    };

    Classifier.predict = function () {
        var currModel = this.model;
        if (currModel) {
            var currData = this.testData;
            if (currData) {
                this.prediction = [];
                for (var i = 0; i < currData.length; i++) {
                    var prediction = currModel.predict(currData[i]);
                    if(prediction instanceof Object){
                        var max = -Infinity,
                            prop;
                        for(var key in prediction){
                            if(prediction.hasOwnProperty(key)){
                                if(prediction[key] > max){
                                    max = prediction[key];
                                    prop = key;
                                }
                            }
                        }
                        prediction = prop;
                    }
                    this.prediction.push({
                        categoryAttr: currData[i][this.categoryAttr],
                        prediction: prediction
                    });
                }
                return this.prediction;
            }
        }
    };

    function createTreeNode(node) {
        var treeNode = {Content: node.attribute, Nodes: []};
        if (node.notMatch) {
            var leftChild = createTreeNode(node.notMatch);
        }
        if (node.match) {
            var rightChild = createTreeNode(node.match);
        }
        if (!node.notMatch && !node.match) {
            treeNode.Content = node.category;
        } else {
            treeNode.Nodes.push(leftChild, rightChild);
        }
        return treeNode;
    }

    Classifier.drawGraph = function (model, divId) {
        var currModel = model || this.model;
        if (currModel && divId) {
            if (!Array.isArray(currModel.trees)) {
                currModel = {trees: [currModel]};
            }
            var rootNode = {Content: 'Root', Nodes: []};
            for (var i = 0; i < (currModel.trees || []).length; i++) {
                rootNode.Nodes.push(createTreeNode(currModel.trees[i].root));
            }
            // Draw the tree for the first time
            RefreshTree();

            function RefreshTree() {
                DrawTree({
                    Container: document.getElementById(divId),
                    RootNode: rootNode,
                    Layout: "Vertical",//["Horisontal"|"Vertical"]
                    OnNodeClick: NodeClick,
                    OnNodeDoubleClick: NodeDoubleClick
                });
            }

            function NodeClick() {
                if (this.Node.Content == "N1.2.3") {
                    alert(this.Node.Content);
                }
                if (event && event.shiftKey) {
                    // Add new Child if Expanded
                    if (!this.Node.Collapsed) {
                        if (!this.Node.Nodes) this.Node.Nodes = {};
                        var newNodeIndex = this.Node.Nodes.length;
                        this.Node.Nodes[newNodeIndex] = {};
                        this.Node.Nodes[newNodeIndex].Content = this.Node.Content + "." + (newNodeIndex + 1);
                        RefreshTree();
                    }
                }
                ;
            }

            function NodeDoubleClick() {
                if (this.Node.Nodes && this.Node.Nodes.length > 0) { // If has children
                    this.Node.Collapsed = !this.Node.Collapsed;
                    RefreshTree();
                }
            }

            function ChangeLayout() {
                RefreshTree();
            }
        }
    };

    Classifier.renderSamples = function (model) {

        //  RenderHelper.renderSamples(samples, $el, model, target, features);
    };

    return Classifier;
})();