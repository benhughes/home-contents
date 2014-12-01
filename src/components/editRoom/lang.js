"use strict";

var lang = {
    "en": {
        "nameLabel": "Name",
        "title": "Edit/Add Room",
        "close": "Close",
        "delete": "Delete",
        "saveAndClose": "Save and Close",
        "saveAndNew": "Save and New",
    },
    "fr": {

    }
};

module.exports = function (langCode) {
    return lang[langCode] ? lang[langCode] : lang.en;
};