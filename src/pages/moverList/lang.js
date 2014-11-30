"use strict";

var lang = {
    "en": {
        "pageTitle": "House Manifest"
    },
    "fr": {

    }
};

module.exports = function (langCode) {
    return lang[langCode] ? lang[langCode] : lang.en;
};