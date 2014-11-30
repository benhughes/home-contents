"use strict";

var appData = require('./app.data'),
    fbSelector,
    convertFBObjectToArray = require('../utils/convertFBObjectToArray'),
    data = {};




var itemData = {
    initialize: function () {
        fbSelector = appData.getSelector().child('items');
        fbSelector.on("value", function(snapshot) {
            //firebase doesn't really like arrays so we store everything as an object
            //then convert it in the front end so we can use array functions like filter, sort etc.
            data = convertFBObjectToArray(snapshot.val());
        });
    },
    getSelector: function () {
        return fbSelector;
    },
    getData: function () {
        return data;
    },
    filterByRoom: function (roomId) {
        var filteredList = [],
            dataToFilter = this.getData();
        for (var i =0; i < dataToFilter.length; i++) {
            if (dataToFilter[i].room === roomId) {
                filteredList.push(dataToFilter[i]);
            }
        }
        return filteredList;
    },
    getHeaviestByRoom: function (roomId) {
        var sortedData = this.filterByRoom(roomId),
            returnedData = [];
        sortedData.sort(function (a, b) {
            var aWeight = typeof a.weight === "number" ? a.weight : 0,
                bWeight = typeof b.weight === "number" ? b.weight : 0;
            return bWeight - aWeight;
        });

        if (sortedData[0] && sortedData[0].weight) {
            returnedData.push(sortedData[0]);
        }
        if (sortedData[1] && sortedData[1].weight) {
            returnedData.push(sortedData[1]);
        }

        return returnedData;
    },
    getFragileItemsForRoom: function (roomId) {
        return this.filterByRoom(roomId)
            .filter(function (item) {
                return item.fragile === true;
            });
    },
    getNonFragileItemsForRoom: function (roomId) {
        return this.filterByRoom(roomId)
            .filter(function (item) {
                return item.fragile !== true;
            });
    }
};

module.exports = itemData;