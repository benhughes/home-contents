"use strict";

var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <li>
                <h3>{this.props.item.name}</h3>
                <span className="description">{this.props.item.description}</span>
            </li>
        );
    }
});