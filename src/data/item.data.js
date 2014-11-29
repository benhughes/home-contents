"use strict";

var appData = require('./app.data');

var fbSelector = appData.child('items'),
    data = {};

fbSelector.on("value", function(snapshot) {
    data = snapshot.val();
    console.log("new data", data);
});

var itemData = {
    getSelector: function () {
        return fbSelector;
    },
    getData: function () {
        return data;
    },
    filterByRoom: function (roomId) {
        var filteredList = {};
        for (var item in data) {
            if (data[item].room === roomId) {
                filteredList[item] = data[item];
            }
        }
        return filteredList;
    }
};

module.exports = itemData;