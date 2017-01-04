/* exported ClassifierHelper */
/* globals _ */
var ClassifierHelper = (function () {
    'use strict';
    var ClassifierHelper = {};

    //LISTBB
    ClassifierHelper.algoLISTBB = function (_s, target, features) {
        var omegaCrit = [],
            classes = [], ii, jj;
        var matched;
        classes[0] = _s._wrapped[0].classification || target;
        for (jj = 0; jj < _s._wrapped.length; jj++) {
            if (_s._wrapped[jj].classification !== classes[0])
                classes[1] = _s._wrapped[jj].classification;
        }
        for (ii in features) {
            if (features.hasOwnProperty(ii)) {
                omegaCrit[features[ii]] = 0;
                matched = [0, 0, 0, 0];
                for (jj = 0; jj < _s._wrapped.length; jj++) {
                    if (_s._wrapped[jj][features[ii]] === 1) {
                        //	 alert(((classes[0]==_s._wrapped[jj]["classification"]) && (matched[0])==0)+" "+((classes[1]==_s._wrapped[jj]["classification"]) && (matched[1])==0));
                        if ((classes[0] === _s._wrapped[jj].classification) && (matched[0]) === 0) {
                            matched[0] = 1;
                            omegaCrit[features[ii]]++;
                        }
                        if ((classes[1] === _s._wrapped[jj].classification) && (matched[1]) === 0) {
                            matched[1] = 1;
                            omegaCrit[features[ii]]++;
                        }
                    }
                    if (_s._wrapped[jj][features[ii]] === 0) {
                        if ((classes[0] === _s._wrapped[jj].classification) && (matched[2]) === 0) {
                            matched[2] = 1;
                            omegaCrit[features[ii]]++;
                        }
                        if ((classes[1] === _s._wrapped[jj].classification) && (matched[3]) === 0) {
                            matched[3] = 1;
                            omegaCrit[features[ii]]++;
                        }
                    }


                }
                if (!((matched[0] !== 0 || matched[1] !== 0) && (matched[2] !== 0 || matched[3] !== 0))) {
                    matched[0] = matched[1] = matched[2] = matched[3] = 0;
                    omegaCrit[features[ii]] = Number.MAX_VALUE;
                }
            }
        }

        var minOmega = Number.MAX_VALUE;
        var minOmegaid = "";
        for (ii in features) {
            if ((omegaCrit[features[ii]] < minOmega)) {
                minOmega = omegaCrit[features[ii]];
                minOmegaid = features[ii];
            }
        }
        var i = 0;
        for (ii in features) {
            if (omegaCrit[features[ii]] === minOmega) {
                i++;
            }
        }
//2
        if (( i === 2) && (minOmega !== Number.MAX_VALUE)) {
            return minOmegaid;
        }

        var mm, _newS = {};
        _newS._wrapped = [];
        for (jj = 0, mm = 0; jj < _s._wrapped.length; jj++) {
            if ((minOmega === omegaCrit[features[jj]]) && (minOmega !== Number.MAX_VALUE)) {
                _newS._wrapped[mm] = _s._wrapped[jj];
                mm++;
            }
        }
        //S1(k)
        var S1 = 1;
        for (ii in features) {
            if (features.hasOwnProperty(ii)) {
                matched = [0, 0, 0, 0];
                for (jj = 0; jj < _newS._wrapped.length; jj++) {
                    if (_newS._wrapped[jj][features[ii]] === 0) {
                        if ((classes[0] === _newS._wrapped[jj].classification) && (matched[0]) == 0) {
                            matched[0] = 1;
                        }
                        if ((classes[1] == _newS._wrapped[jj].classification) && (matched[1]) == 0) {
                            matched[1] = 1;
                        }
                    }
                    if (_newS._wrapped[jj][features[ii]] == 1) {
                        if ((classes[0] == _newS._wrapped[jj].classification) && (matched[2]) == 0) {
                            matched[2] = 1;
                        }
                        if ((classes[1] == _newS._wrapped[jj].classification) && (matched[3]) == 0) {
                            matched[3] = 1;
                        }
                    }
                }

                if ((matched[0] == matched[1] == 1) || (matched[2] == matched[3] == 1)) {
                    S1 = 0;
                    break;
                }
            }
        }


//3


        if ((i === 2) || (S1 != 1)) {
            if (_newS._wrapped.length > 0) {
                return maxD(_s, target, features);
            }
            else {
                return maxD(_s, target, features);
            }
        }
        /* else{

         var cnt0 = new Array();
         var cnt1 = new Array();
         for( ii in features)
         {
         cnt0[features[ii]]=0;
         cnt1[features[ii]]=0;
         for(jj=0;jj<_newS._wrapped.length;jj++){


         }
         }
         }*/
        // bestFeature = minOmegaid;
        return maxD(_s, target, features);
    }
//D
    var maxD = function (_s, target, features) {
        var D = [];
        for (var ii in features) {
            if (features.hasOwnProperty(ii)) {
                D[features[ii]] = 0;
                for (var jj = 0; jj < _s._wrapped.length; jj++) {
                    var wrapped = _s._wrapped[jj][features[ii]];
                    if ((wrapped != "0")) {
                        for (var mm = 0; mm < _s._wrapped.length; mm++) {
                            if (( _s._wrapped[mm][features[ii]] != _s._wrapped[jj][features[ii]]) && ( _s._wrapped[mm]["classification"] != _s._wrapped[jj]["classification"])) {

                                D[features[ii]]++;

                            }
                        }

                    }
                }
                // var l;
            }
        }
        var maxD = -1;
        var maxDid = "";

        for (ii in features) {
            if (D[features[ii]] > maxD) {
                maxD = D[features[ii]];
                maxDid = features[ii];
            }
        }
        var bestFeature = maxDid;
        return bestFeature;
    };

    ClassifierHelper.algoCART = function (_s, target, features) {
        var N = _s._wrapped.length;
        var classes = [];
        var giniCrit = [];
        classes[0] = _s._wrapped[0].classification || target;
        for (var jj = 0; jj < _s._wrapped.length; jj++) {
            if (_s._wrapped[jj].classification !== classes[0])
                classes[1] = _s._wrapped[jj].classification;
        }
        for (var ii in features) {
            if (features.hasOwnProperty(ii)) {
                var N1 = 0;
                var N10 = 0;
                var N11 = 0;
                var N2 = 0;
                var N20 = 0;
                var N21 = 0;
                giniCrit[features[ii]] = 0;
                for (jj = 0; jj < _s._wrapped.length; jj++) {

                    if (_s._wrapped[jj][features[ii]] != 1) {

                        N1++;
                    }
                    else N2++;

                }
                for (jj = 0; jj < _s._wrapped.length; jj++) {
                    if ((_s._wrapped[jj][features[ii]] !== 1) && (_s._wrapped[jj].classification === classes[0]))
                        N10++;
                    else if (_s._wrapped[jj][features[ii]] !== 1)
                        N11++;
                    if ((_s._wrapped[jj][features[ii]] !== 0) && (_s._wrapped[jj].classification === classes[0]))
                        N20++;
                    else if (_s._wrapped[jj][features[ii]] !== 0)
                        N21++;
                }
                giniCrit[features[ii]] = (N1 / N) * (1 - (N10 / N1) * (N10 / N1) + (N11 / N1) * (N11 / N1)) + (N2 / N) * (1 - (N20 / N2) * (N20 / N2) + (N21 / N2) * (N21 / N2));
            }
        }
        var minginiCrit = Number.MAX_VALUE;
        var minginiCritid = "";

        for (ii in features) {
            if ((giniCrit[features[ii]] < minginiCrit)) {
                minginiCrit = giniCrit[features[ii]];
                minginiCritid = features[ii];
            }
        }
        return minginiCritid;
    };


    var maxGain = function (_s, target, features) {
        return _.max(features, function (e) {
            return gain(_s, target, e);
        });
    };

    var entropy = function (vals) {
        var uniqueVals = _.unique(vals);
        var probs = uniqueVals.map(function (x) {
            return prob(x, vals);
        });
        var logVals = probs.map(function (p) {
            return -p * log2(p);
        });
        return logVals.reduce(function (a, b) {
            return a + b;
        }, 0);
    };

    var gain = function (_s, target, feature) {
        var attrVals = _.unique(_s.pluck(feature));
        var setEntropy = entropy(_s.pluck(target));
        var setSize = _s.size();
        var entropies = attrVals.map(function (n) {
            var subset = _s.filter(function (x) {
                return x[feature] === n;
            });
            return (subset.length / setSize) * entropy(_.pluck(subset, target));
        });
        var sumOfEntropies = entropies.reduce(function (a, b) {
            return a + b;
        }, 0);
        return setEntropy - sumOfEntropies;
    };

    var prob = function (val, vals) {
        var instances = _.filter(vals, function (x) {
            return x === val;
        }).length;
        var total = vals.length;
        return instances / total;
    };

    var log2 = function (n) {
        return Math.log(n) / Math.log(2);
    };


    var mostCommon = function (l) {
        return _.sortBy(l, function (a) {
            return count(a, l);
        }).reverse()[0];
    };

    var count = function (a, l) {
        return _.filter(l, function (b) {
            return b === a;
        }).length;
    };

    var randomTag = function () {
        return "_r" + Math.round(Math.random() * 1000000).toString();
    };

    ClassifierHelper.classificate = function (_s, target, features, modelalgo) {
        if (_s instanceof Array) {
            _s = _(_s);
        }
        var targets = _.unique(_s.pluck(target));
        if (targets.length === 1) {
            console.log("конец узла! " + targets[0]);
            return {type: "result", val: targets[0], name: targets[0], alias: targets[0] + randomTag()};
        }
        if (features.length === 0) {
            console.log("Возвращаем переменную для ветвления!!!");
            var topTarget = mostCommon(_s.pluck(target));
            return {type: "result", val: topTarget, name: topTarget, alias: topTarget + randomTag()};
        }
        var bestFeature;
        if (modelalgo === "id3") {//ID3
            bestFeature = maxGain(_s, target, features);
        }//Определяем переменную для ветвления!!!


        if (modelalgo === "id3d") {
            bestFeature = maxD(_s, target, features);
        }
        if (modelalgo === "cart") {
            bestFeature = algoCART(_s, target, features);
        }

        if (modelalgo === "listbb") {
            bestFeature = algoLISTBB(_s, target, features);
        }

        var remainingFeatures = _.without(features, bestFeature);
        var possibleValues = _.unique(_s.pluck(bestFeature));

        if ((possibleValues.length === 2) && (possibleValues[0] === 1) && (possibleValues[1] === 0)) {
            possibleValues[0] = 0;
            possibleValues[1] = 1;
        }

        console.log("узел для " + bestFeature);
        var node = {name: bestFeature, alias: bestFeature + randomTag()};

        node.type = "feature";

        node.vals = _.map(possibleValues, function (v) {
            console.log("создание ветки для " + v);

            var _newS = _(_s.filter(function (x) {
                return x[bestFeature] === v;
            }));

            var child_node = {name: v, alias: v + randomTag(), type: "feature_value"};
            //var child_node;
            child_node.child = this.classificate(_newS, target, remainingFeatures, modelalgo);
            return child_node;
        }.bind(this));
        return node;
    };
    return ClassifierHelper;
})();