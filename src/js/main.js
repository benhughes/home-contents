var testLib = require('./test.js'),
    exampleView = require('./views/example.jsx'),
    ItemCollection = require('../collections/items.collection'),
    React = require('react');


console.log(exampleView);
console.log(ItemCollection);

React.render(
    React.createElement(exampleView, null),
    document.getElementById('main')
);


testLib();