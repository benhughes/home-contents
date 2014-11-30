"use strict";

var lang = {
    "en": {
        "nameLabel": "Name",
        "descriptionLabel": "Description",
        "weightLabel": "Weight",
        "fragileLabel": "Fragile",
        "roomLabel": "Room",
        "close": "Close",
        "delete": "Delete",
        "saveAndClose": "Save and Close",
        "saveAndNew": "Save and New",
        "title": "Edit/Add Item"
    },
    "fr": {

    }
};

module.exports = function (langCode) {
    return lang[langCode] ? lang[langCode] : lang.en;
};