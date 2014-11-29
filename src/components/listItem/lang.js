"use strict";

var lang = {
    "en": {
        "edit": "edit",
        "fragile": "Fragile"
    },
    "fr": {

    }
};

module.exports = function (langCode) {
    return lang[langCode] ? lang[langCode] : lang.en;
};