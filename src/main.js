"use strict";

var exampleView = require('./components/roomList/roomList.jsx'),
//    appPage = require('./pages/userList/userList.jsx'),
    appPage = require('./pages/moverList/moverList.jsx'),
    React = require('react'),
    appData = require('./data/app.data.js');

var renderPage = function () {
    React.render(
        React.createElement(appPage, null),
        document.getElementById('main')
    );
};

appData.on("value", renderPage);