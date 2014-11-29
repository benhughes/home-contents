"use strict";

var appData = require('./app.data');

var fbSelector = appData.child('rooms'),
    data = {},
    defaults = [{name: "Kitchen"},{name: "Master Bedroom"}];

fbSelector.on("value", function(snapshot) {
    data = snapshot.val();
    console.log("new room data", data);
    if (!data) {
        defaults.forEach(function (roomItem) {
            fbSelector.push(roomItem);
        });
    }
});

var roomData = {
    getSelector: function () {
        return fbSelector;
    },
    getData: function () {
        return data;
    }
};

module.exports = roomData;