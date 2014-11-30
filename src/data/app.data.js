"use strict";

var Firebase = require('client-firebase');
var model;

module.exports = {
    initialize: function () {
        var fb = new Firebase("https://home-contents.firebaseio.com"),
            //tried to move this out to router but had circular dependency problem
            matches = /listid=([^&#=]*)/.exec(window.location.search),
            listId = matches && matches[1] ? matches[1] : "";
        if (listId) {
            model  = fb.child(listId);
        }
        return model;
    },
    getSelector: function () {
        return model;
    }
};