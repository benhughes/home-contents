"use strict";

var React = require('react'),
    itemsData = require('../data/item.data');

module.exports = React.createClass({
    render: function() {
        console.log(this.props);
        return (
            <li>
                <h3>{this.props.item.name}</h3>
                <span className="description">{this.props.item.description}</span>
            </li>
        );
    }
});