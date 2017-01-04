/* exported DrawHelper */
/* globals _, google */
var DrawHelper = (function () {
    'use strict';
    var DrawHelper = {};

    var addEdges = function (node, g) {
        var nodeNew = {};
        if (node.type == 'feature_value') {

            g.push([node.child.alias, node.alias, '']);
            if (node.child.type != 'result') {
                g = addEdges(node.child, g);
            }
            return g;

        }
        else {
            nodeNew = node;
        }

        if (nodeNew.type == 'feature') {
            _.each(nodeNew.vals, function (m) {
                g.push([m.alias, nodeNew.alias, '']);
                g = addEdges(m, g);
            });
            return g;
        }

        return g;
    };

    DrawHelper.drawGraph = function (id3Model, divId) {
        var g = [];
        g = addEdges(id3Model, g).reverse();
        window.g = g;
        var data = google.visualization.arrayToDataTable(g.concat(g));
        var chart = new google.visualization.OrgChart(document.getElementById(divId));
        google.visualization.events.addListener(chart, 'ready', function () {
            _.each($('.google-visualization-orgchart-node'), function (x) {
                var oldVal = $(x).html();
                if (oldVal) {
                    var cleanVal = oldVal.replace(/_r[0-9]+/, '');
                    $(x).html(cleanVal);
                }
            });
        });
        chart.draw(data, {allowHtml: true});

    };
    return DrawHelper;
})();