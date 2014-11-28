var testLib = require('./test.js'),
    exampleView = require('./views/example.jsx');

var React = require('react');

console.log(exampleView);

React.render(
    React.createElement(exampleView, null),
    document.getElementById('main')
);


testLib();