"use strict";

var lang = {
    "en": {
        "addItem": "Add Item",
        edit: "Edit"
    },
    "fr": {

    }
};

module.exports = function (langCode) {
    return lang[langCode] ? lang[langCode] : lang.en;
};