/* exported start */
/* globals ToolbarController */
$(document).ready(function () {
    'use strict';
    document.title = 'Decision forest';
    $('#data-container').prepend(ToolbarController.getWidgetDom());
    ToolbarController.subscribe();
});
