/* exported ToolbarController */
/* globals _, Classifier */
var ToolbarController = (function () {
    'use strict';
    var ToolbarController = {};

    var toolbar = `<div class="up-toolbar">

<button class="btn" style="display:inline-block;">Upload Data</button>

<div style="display:inline-block;" class="dropdown">
  <button class="btn" id="dLabel1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Choose Data
    <span class="caret"></span>
  </button>
  <ul class="dropdown-menu" aria-labelledby="dLabel1">
  <li data-data="gener1_examples" data-data-test="gener1_samples" class="data-select-btn">gener1_examples</li>
  <li data-data="gener2_examples" data-data-test="gener2_samples" class="data-select-btn">gener2_examples</li>
  <li data-data="gener3_examples" data-data-test="gener3_samples" class="data-select-btn">gener3_examples</li>
  <li data-data="voting_examples" data-data-test="voting_samples" class="data-select-btn">voting_examples</li>
  <li data-data="chess_examples" data-data-test="chess_samples" class="data-select-btn">chess_examples</li>
  </ul>
</div>

<div style="display:inline-block;" class="dropdown">
  <button class="btn" id="dLabel2" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Choose Criterion
    <span class="caret"></span>
  </button>
  <ul class="dropdown-menu" aria-labelledby="dLabel2">
  <li class="criterion-btn" data-criterion="id3">id3</li>
  <li class="criterion-btn"  data-criterion="cart" >cart</li>
    <li class="criterion-btn" data-criterion="listbb">listbb</li>
  </ul>
</div>

<div style="display:inline-block;" class="dropdown">
  <button class="btn" id="dLabel3" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Choose Algorithm
    <span class="caret"></span>
  </button>
  <ul class="dropdown-menu" aria-labelledby="dLabel3">
  <li class="algorithm-btn" data-algorithm="decision-tree">Decision Tree</li>
  <li class="algorithm-btn"  data-algorithm="decision-forest-bagging" >Decision Forest (Bagging)</li>
  <li class="algorithm-btn"  data-algorithm="decision-forest-incompetence" >Decision Forest (Incompetence)</li>
  </ul>
</div>

<button class="build-model-btn btn" style="display:inline-block;">Build&Draw</button>

<button class="build-prediction-btn btn" style="display:inline-block;">Predict</button>
</div>`;

    ToolbarController.getWidgetDom = function () {
        var widgetDom = $(toolbar);
        return widgetDom;
    };

    ToolbarController.subscribe = function () {
        var body = $('body');
        body
            .on('click', ".criterion-btn", onCriterionBtnClick)
            .on('click', ".algorithm-btn", onAlgorithmBtnClick)
            .on('click', ".build-model-btn", onBuildModelBtnClick)
            .on('click', ".build-prediction-btn", onBuildPredictionBtnClick)
            .on('click', ".data-select-btn", onDataSelectBtnClick)
        ;
    };

    var onAlgorithmBtnClick = function onAlgorithmBtnClick(event) {
        var algorithm = event.target.getAttribute('data-algorithm');
        Classifier.setProperties(null, null, null, null, algorithm);
    };

    var onCriterionBtnClick = function onCriterionBtnClick(event) {
        var criterion = event.target.getAttribute('data-criterion');
        Classifier.setProperties(criterion);
    };

    var onBuildModelBtnClick = function onBuildModelBtnClick() {
        Classifier.generateModel();
        Classifier.drawGraph(null, 'canvas');
    };

    var onBuildPredictionBtnClick = function onBuildPredictionBtnClick() {
        var prediction = Classifier.predict();
        if (prediction) {
            var outerDiv = $('<table class="prediction-table table table-striped"></table>');
            outerDiv.append('<thead><tr class="prediction-table-row-caption info"><th class="prediction-table-prediction-caption" style="display: inline-block">Prediction</th><th class="prediction-table-real-caption" style="display: inline-block">Real</th></tr></thead>');
            var innerDiv = $('<tbody></tbody>');
            for (var i = 0; i < prediction.length; i++) {
                var predictionRes = prediction[i].prediction;
                var realRes = prediction[i].categoryAttr;
                var div = $('<tr class="prediction-table-row info"></tr>');
                if (predictionRes === realRes) {
                    div.addClass('info');
                } else {
                    div.addClass('warning');
                }
                var divPrediction = $('<td style="display: inline-block" class="prediction-table-prediction"></td>');
                divPrediction.html(predictionRes);
                var divReal = $('<td style="display: inline-block" class="prediction-table-real"></td>');
                divReal.html(realRes);
                div.append(divPrediction, divReal);
                innerDiv.append(div);
            }
            outerDiv.append(innerDiv);
            $('.left-panel').empty().append(outerDiv);
        }
    };

    var onDataSelectBtnClick = function onDataSelectBtnClick(event) {
        var target = event.target;
        var data = target.getAttribute('data-data');
        var dataTest = target.getAttribute('data-data-test');
        Classifier.setProperties(null, window[data], window[dataTest]);
    };

    return ToolbarController;
})();