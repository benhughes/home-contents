"use strict";

var exampleView = require('./components/roomList.jsx'),
    appPage = require('./pages/app.jsx'),
    React = require('react');

var appData = require('./data/app.data.js');


console.log(exampleView);

React.render(
    React.createElement(appPage, null),
    document.getElementById('main')
);

appData.on("value", function() {
    React.render(
        React.createElement(appPage, null),
        document.getElementById('main')
    );
});