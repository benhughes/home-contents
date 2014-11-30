"use strict";

var router = require('./router'),
    React = require('react');

var renderPage = function () {
    var pageToLoad = router.getPageToLoad();
    React.render(
        React.createElement(pageToLoad, null),
        document.getElementById('main')
    );
};
renderPage();