"use strict";

var lang = {
    "en": {
        "pageTitle": "Welcome! please input your list ID",
        "messagePart1": "First time here?",
        "messagePart2": "Just type in a unique name (something you'll remember) and press submit to start creating your list"
    },
    "fr": {

    }
};

module.exports = function (langCode) {
    return lang[langCode] ? lang[langCode] : lang.en;
};