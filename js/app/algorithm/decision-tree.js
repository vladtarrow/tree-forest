/* exported dt */
/* globals _, ClassifierHelper, Utility */

var dt = (function () {

    function DecisionTree(builder) {
        this.root = buildDecisionTree({
            trainingSet: builder.trainingSet,
            ignoredAttributes: arrayToHashSet(builder.ignoredAttributes),
            categoryAttr: builder.categoryAttr || 'category',
            minItemsCount: builder.minItemsCount || 1,
            entropyThrehold: builder.entropyThrehold || 0.01,
            maxTreeDepth: builder.maxTreeDepth || 70,
            criterion: builder.criterion ? builder.criterion.toLocaleLowerCase() : 'gini'//gini|id3, gain|cart,listbb
        });
    }

    DecisionTree.prototype.predict = function (item) {
        return predict(this.root, item);
    };


    function RandomForest(builder, treesNumber) {
        this.trees = buildRandomForest(builder, treesNumber);
    }

    RandomForest.prototype.predict = function (item) {
        return predictRandomForest(this.trees, item);
    };


    function DecisionForest(builder, maxTreesNumber, maxTreesDepth) {
        this.trees = buildDecisionForest(builder, maxTreesNumber, maxTreesDepth);
    }

    DecisionForest.prototype.predict = function (item) {
        return predictDecisionForest(this.trees, item);
    }

    function arrayToHashSet(array) {
        var hashSet = {};
        if (array) {
            for (var i in array) {
                var attr = array[i];
                hashSet[attr] = true;
            }
        }
        return hashSet;
    }

    function countUniqueValues(items, attr) {
        var counter = {};


        for (var i = items.length - 1; i >= 0; i--) {
            // items[i][attr] - value of attribute
            counter[items[i][attr]] = 0;
        }


        for (var i = items.length - 1; i >= 0; i--) {
            counter[items[i][attr]] += 1;
        }

        return counter;
    }


    function entropy(items, attr) {

        var counter = countUniqueValues(items, attr);

        var entropy = 0;
        var p;
        for (var i in counter) {
            p = counter[i] / items.length;
            entropy += -p * Math.log(p);
        }

        return entropy;
    }


    function split(items, attr, predicate, pivot) {
        var match = [];
        var notMatch = [];

        var item,
            attrValue;

        for (var i = items.length - 1; i >= 0; i--) {
            item = items[i];
            attrValue = item[attr];

            if (predicate(attrValue, pivot)) {
                match.push(item);
            } else {
                notMatch.push(item);
            }
        }

        return {
            match: match,
            notMatch: notMatch
        };
    }

    function mostFrequentValue(items, attr) {

        var counter = countUniqueValues(items, attr);

        var mostFrequentCount = 0;
        var mostFrequentValue;

        for (var value in counter) {
            if (counter[value] > mostFrequentCount) {
                mostFrequentCount = counter[value];
                mostFrequentValue = value;
            }
        }

        return mostFrequentValue;
    }

    var predicates = {
        '==': function (a, b) {
            return a == b
        },
        '>=': function (a, b) {
            return a >= b
        }
    };

    var getBestSplit = function getBestSplit(trainingSet, categoryAttr, options) {
        var initialEntropy = options.initialEntropy,
            ignoredAttributes = options.ignoredAttributes,
            alreadyChecked = options.alreadyChecked,
            criterion = options.criterion;


        var features = (function (obj) {
            var res = [];
            for (var key in obj) {
                if (key !== categoryAttr && !ignoredAttributes[key]) {
                    res.push(key);
                }
            }
            return res;
        })(trainingSet[0]);


        var bestSplit = [];

        for (var i = trainingSet.length - 1; i >= 0; i--) {
            var item = trainingSet[i];


            for (var attr in item) {
                if ((attr == categoryAttr) || ignoredAttributes[attr]) {
                    continue;
                }


                var pivot = item[attr];


                var predicateName;
                if (typeof pivot == 'number') {
                    predicateName = '>=';
                } else {

                    predicateName = '==';
                }

                var attrPredPivot = attr + predicateName + pivot;
                if (alreadyChecked[attrPredPivot]) {
                    continue;
                }
                alreadyChecked[attrPredPivot] = true;

                var predicate = predicates[predicateName];


                var currSplit = split(trainingSet, attr, predicate, pivot);


                var matchEntropy = entropy(currSplit.match, categoryAttr);
                var notMatchEntropy = entropy(currSplit.notMatch, categoryAttr);


                var newEntropy = 0;
                newEntropy += matchEntropy * currSplit.match.length;
                newEntropy += notMatchEntropy * currSplit.notMatch.length;
                newEntropy /= trainingSet.length;
                var currGain = initialEntropy - newEntropy;


                var tmpSplit = {};
                tmpSplit = currSplit;
                tmpSplit.predicateName = predicateName;
                tmpSplit.predicate = predicate;
                tmpSplit.attribute = attr;
                tmpSplit.pivot = pivot;
                tmpSplit.gain = currGain;

                bestSplit.push(tmpSplit);

            }
        }

        var tmpTrainingSet = [];
        for (var i = 0; i < features.length; i++) {
            var attr = features[i];
            var filteredBestSplit = bestSplit.filter(function (item) {
                return item.attribute === attr;
            });
            var maxId = -1;
            var maxValue = -Infinity;
            for (var j = 0; j < filteredBestSplit.length; j++) {
                if (filteredBestSplit[j].gain > maxValue) {
                    maxValue = filteredBestSplit[j].gain;
                    maxId = j;
                }
            }
            if (maxId >= 0) {
                tmpTrainingSet.push(filteredBestSplit[maxId]);
            }
        }
        var bestAttribute = getBestAttribute(tmpTrainingSet, trainingSet, categoryAttr, features, criterion);
        return bestAttribute;
    };


    function getBestAttribute(tmpTrainingSet, trainingSet, categoryAttr, features, criterion) {
        switch (criterion) {
            case 'id3':
            case 'gini':
                var maxId = -1;
                var maxValue = -Infinity;
                for (var i = 0; i < tmpTrainingSet.length; i++) {
                    if (tmpTrainingSet[i].gain > maxValue) {
                        maxValue = tmpTrainingSet[i].gain;
                        maxId = i;
                    }
                }
                if (maxId >= 0) {
                    return tmpTrainingSet[maxId];
                } else {
                    return {gain: 0};
                }
                break;
            case 'cart':
            case 'gain':
                var attr = ClassifierHelper.algoCART(_(trainingSet), categoryAttr, features);
                var bestAttr = tmpTrainingSet.filter(function (item) {
                        return item.attribute === attr;
                    })[0] || {gain: 0};
                return bestAttr;
                break;
            case 'listbb':
                var attr = ClassifierHelper.algoLISTBB(_(trainingSet), categoryAttr, features);
                var bestAttr = tmpTrainingSet.filter(function (item) {
                        return item.attribute === attr;
                    })[0] || {gain: 0};
                return bestAttr;
                break;
        }
    }

    function buildDecisionTree(builder) {

        var trainingSet = builder.trainingSet;
        var minItemsCount = builder.minItemsCount;
        var categoryAttr = builder.categoryAttr;
        var entropyThrehold = builder.entropyThrehold;
        var maxTreeDepth = builder.maxTreeDepth;
        var ignoredAttributes = builder.ignoredAttributes;

        if ((maxTreeDepth == 0) || (trainingSet.length <= minItemsCount)) {
            return {
                category: mostFrequentValue(trainingSet, categoryAttr)
            };
        }

        var initialEntropy = entropy(trainingSet, categoryAttr);

        if (initialEntropy <= entropyThrehold) {
            return {
                category: mostFrequentValue(trainingSet, categoryAttr)
            };
        }

        var alreadyChecked = {};

        var bestSplit = getBestSplit(
            trainingSet,
            categoryAttr,
            {
                ignoredAttributes: ignoredAttributes,
                alreadyChecked: alreadyChecked,
                initialEntropy: initialEntropy,
                criterion: builder.criterion
            });

        if (!bestSplit.gain) {
            return {category: mostFrequentValue(trainingSet, categoryAttr)};
        }

        // building subtrees

        builder.maxTreeDepth = maxTreeDepth - 1;

        builder.trainingSet = bestSplit.match;
        var matchSubTree = buildDecisionTree(builder);

        builder.trainingSet = bestSplit.notMatch;
        var notMatchSubTree = buildDecisionTree(builder);

        return {
            attribute: bestSplit.attribute,
            predicate: bestSplit.predicate,
            predicateName: bestSplit.predicateName,
            pivot: bestSplit.pivot,
            match: matchSubTree,
            notMatch: notMatchSubTree,
            matchedCount: bestSplit.match.length,
            notMatchedCount: bestSplit.notMatch.length
        };
    }

    function predict(tree, item) {
        var attr,
            value,
            predicate,
            pivot;


        while (true) {

            if (!tree) {
                return null;
            }

            if (typeof tree.category !== 'undefined') {

                return tree.category;
            }

            attr = tree.attribute;
            value = item[attr];

            predicate = tree.predicate;
            pivot = tree.pivot;


            if (predicate(value, pivot)) {
                tree = tree.match;
            } else {
                tree = tree.notMatch;
            }
        }
    }

    function buildDecisionForest(builder, maxTreesNumber, maxTreesDepth) {
        var allAttributes = [];
        for (var i = 0; i < builder.trainingSet.length; i++) {
            var el = builder.trainingSet[i];
            for (var key in el) {
                if (el.hasOwnProperty(key)) {
                    allAttributes.push(key);
                }
            }
        }
        allAttributes = Utility.unique(allAttributes);
        var allAttributeLength = allAttributes.length - 1;//Учитываем, что 1 аттр - это категория (класс)
        var res = [];
        var ignoredAttributes = builder.ignoredAttributes;

        function buildSmartTree() {
            builder.ignoredAttributes = ignoredAttributes;
            var tree = new DecisionTree(builder);
            var iter = 1;
            var attributes = [];

            function getIgnoredAttributes(iter, node) {
                if (!node) {
                    return;
                }
                if (iter < maxTreesDepth) {
                    getIgnoredAttributes(iter + 1, node.match);
                    getIgnoredAttributes(iter + 1, node.notMatch);
                }
                if (typeof node.attribute !== 'undefined') {
                    attributes.push(node.attribute);
                    if (iter >= maxTreesDepth) {
                        node.match = null;
                        node.notMatch = null;
                        node.attribute = null;
                    }
                }
            }

            getIgnoredAttributes(iter, tree.root);
            ignoredAttributes = ignoredAttributes.concat(Utility.unique(attributes));
            res.push(tree);
        }

        do {
            buildSmartTree();
        } while (allAttributeLength > ignoredAttributes.length);

        return res;
    }


    function buildDecisionForest2(builder, maxTreesNumber, maxTreesDepth) {
        var items = builder.trainingSet,
            ignoredAttributes = builder.ignoredAttributes;
        var currTreesNumber = 0;
        var _buildDecisionForest = function _buildDecisionForest() {
            var tree = new DecisionTree(builder);
            var recursiveTree = function recursiveTree(node, depth, features) {
                if (depth > maxTreesDepth && (node.match && node.match.match && node.notMatch && node.notMatch.notMatch)) {
                    builder.ignoredAttributes = builder.ignoredAttributes.concat(features);
                    var tree = new DecisionTree(builder);
                    $.extend(node, tree.root);
                }
                else {
                    if (node.attribute) {
                        features = features.concat(node.attribute);
                        if (node.notMatch) {
                            recursiveTree(node.notMatch, depth + 1, features);
                        }
                        if (node.match) {
                            recursiveTree(node.match, depth + 1, features);
                        }
                    }
                }

            };
            recursiveTree(tree.root, 0, []);
            return [tree];
        };
        return _buildDecisionForest();
    }


    function buildRandomForest(builder, treesNumber) {
        var items = builder.trainingSet;

        var trainingSets = [];
        for (var t = 0; t < treesNumber; t++) {
            trainingSets[t] = [];
        }
        for (var i = items.length - 1; i >= 0; i--) {
            var correspondingTree = i % treesNumber;
            trainingSets[correspondingTree].push(items[i]);
        }


        var forest = [];
        for (var t = 0; t < treesNumber; t++) {
            builder.trainingSet = trainingSets[t];

            var tree = new DecisionTree(builder);
            forest.push(tree);
        }
        return forest;
    }

    function predictRandomForest(forest, item) {
        var result = {};
        for (var i in forest) {
            var tree = forest[i];
            var prediction = tree.predict(item);
            result[prediction] = result[prediction] ? result[prediction] + 1 : 1;
        }
        return result;
    }

    function predictDecisionForest(forest, item) {
        var result = {};
        var prediction;
        var prevPrediction;
        var i = 0;
        do {
            var tree = forest[i];
            prediction = tree.predict(item);
            result[prevPrediction] = undefined;
            if (result[prediction] === undefined) {
                result[prediction] = 1;
            }
            prevPrediction = prediction;
            i++;
        } while (i < forest.length && prediction === null);
        return result;
    }

    var exports = {};
    exports.DecisionTree = DecisionTree;
    exports.RandomForest = RandomForest;
    exports.DecisionForest = DecisionForest;
    return exports;
})();