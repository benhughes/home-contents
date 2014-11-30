"use strict";

var appData = require('./app.data');

var fbSelector,
    data = {},
    defaults = [{name: "Kitchen"},{name: "Master Bedroom"}];


var roomData = {
    initialize: function () {
        fbSelector = appData.getSelector().child('rooms');
        fbSelector.on("value", function(snapshot) {
            data = snapshot.val();
            if (!data) {
                defaults.forEach(function (roomItem) {
                    fbSelector.push(roomItem);
                });
            }
        });

    },
    getSelector: function () {
        return fbSelector;
    },
    getData: function () {
        return data;
    }
};

module.exports = roomData;