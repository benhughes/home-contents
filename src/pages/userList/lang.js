"use strict";

var lang = {
    "en": {
        "pageTitle": "Moving List"
    },
    "fr": {

    }
};

module.exports = function (langCode) {
    return lang[langCode] ? lang[langCode] : lang.en;
};