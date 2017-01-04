/* exported PredictHelper */
/* globals _ */
var PredictHelper = (function () {
    'use strict';
    var PredictHelper = {};

    PredictHelper.predict = function (id3Model, testData) {
        var res = [];

        function _detect(x) {
            return x.name === sampleVal;
        }

        for (var i = 0; i < (testData || []).length; i++) {
            var sample = testData[i];
            var root = id3Model;
            while (!root.val) {
                var attr = root.name;
                var sampleVal = sample[attr];
                var childNode = _.detect(root.vals, _detect);
                if (childNode) {
                    root = childNode.child;
                } else {

                    root = ((root.vals || [])[0] || []).child || (((root || []).vals || [])[1] || []).child;
                }
            }
            res.push({data: sample, prediction: root.val});
        }

        return res;
    };

    return PredictHelper;
})();