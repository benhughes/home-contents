"use strict";

var lang = {
    "en": {
        "nameLabel": "Name",
        "title": "Edit/Add Room"
    },
    "fr": {

    }
};

module.exports = function (langCode) {
    return lang[langCode] ? lang[langCode] : lang.en;
};