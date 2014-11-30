"use strict";

var lang = {
    "en": {
        "pageTitle": "Moving List",
        "addRoom": "Add A Room"
    },
    "fr": {

    }
};

module.exports = function (langCode) {
    return lang[langCode] ? lang[langCode] : lang.en;
};