/* exported RenderHelper */
/* globals _, Classifier */
var RenderHelper = (function () {
    'use strict';
    var RenderHelper = {};
    
    RenderHelper.renderSamples = function (samples, $el, model, target, features) {
        $('#samples').empty();
        $('#samplesID').empty();
        $('#tooltip').remove();

        var totals = 0;
        var errors = 0;
        _.each(samples, function (s) {
            totals++;
            var features_for_sample = _.map(features, function (x) {
                return s[x];
            });
            if (Classifier.predict(model, s) == s[target]) {
                $el.append("<tr style=\"color:green;\"><td>" + features_for_sample.join('</td><td>') + "</td><td><b>" + Classifier.predict(model, s) + "</b></td><td>Истинный класс:<b> " + s[target] + "</b></td></tr>");
            } else {
                $el.append("<tr  style=\"color:#ff0000;\"><td>" + features_for_sample.join('</td><td>') + "</td><td><b>" + Classifier.predict(model, s) + "</b></td><td>Истинный класс:<b> " + s[target] + "</b></td></tr>");
                errors++;
            }
        });
        
        $('#samplesID').append("<br><h3>Классифицируемых объектов всего: <b>" + totals + " </b></h3>");
        $('#samplesID').append("<h3>Верных классификаций: <b style=\"color:green;\">" + (totals - errors) + " </b></h3>");
        $('#samplesID').append("<h3>Ошибок: <b style=\"color:#ff0000;\">" + (errors) + " </b></h3><br>");
        $('#samplesID').append("<h2>Список классифицируемых объектов:</h2>");
    };

    RenderHelper.renderTrainingData = function (_training, $el, target, features) {
        $('#training').empty();
        $('#trainingID').empty();
        $('#trainingID').append("<h2>Список объектов обучающей выборки:</h2>");
        _training.each(function (s) {
            $el.append("<tr><td>" + _.map(features, function (x) {
                    return s[x];
                }).join('</td><td>') + "</td><td><b>" + s[target] + "</b></td></tr>");
        });
    };


    return RenderHelper;
})();