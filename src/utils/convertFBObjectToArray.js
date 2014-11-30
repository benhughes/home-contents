"use strict";

module.exports = function (obj) {
    var result = [];
    obj = obj || {};

    Object.keys(obj).forEach(function (key) {
        var element = obj[key];
        element.id = key;
        result.push(element);
    });

    return result;
};
