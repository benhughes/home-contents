"use strict";

var lang = {
    "en": {
        "pageTitle": "Moving List",
        "addRoom": "Add A Room",
        "manifest": "Manifest"
    },
    "fr": {

    }
};

module.exports = function (langCode) {
    return lang[langCode] ? lang[langCode] : lang.en;
};