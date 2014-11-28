"use strict";

var Backbone = require('backbone'),
    ItemModel = require('../models/item.model');

var ItemsCollection = Backbone.Collection.extend({
    model: ItemModel
});

module.exports = ItemsCollection;