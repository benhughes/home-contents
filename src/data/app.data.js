"use strict";

var Firebase = require('client-firebase');

var fb = new Firebase("https://home-contents.firebaseio.com");

var model = fb.child('bensmove');

module.exports = model;