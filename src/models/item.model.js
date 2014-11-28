"use strict";

var Backbone = require('backbone');

var ItemModel = Backbone.Model.extend({
    defaults: {
        "room": "",
        "weight": "",
        "description": "",
        "fragile": false
    }
});

module.exports = ItemModel;