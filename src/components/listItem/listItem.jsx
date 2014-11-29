"use strict";

var React = require('react'),
    lang = require('./lang'),
    EditItem = require('../editItem/editItem.jsx');


module.exports = React.createClass({
    onEditClick: function () {
        console.log('editClick');
        React.render(<EditItem item={this.props.item} id={this.props.id} />, document.getElementById('popup'));
    },
    render: function() {
        var language = lang("en");

        return (
            <li className={["listItem", "listItem-" + this.props.id].join(' ')}>
                <a className="edit" href="#" onClick={this.onEditClick}>{language.edit}</a>
                <span className={["fragileIndicator", this.props.item.fragile ? "isFragile": "notFragile"].join(' ')}>
                {language.fragile}
                </span>
                <span className={["weight", this.props.item.weight > 0 ? "weight-show" : ""]} >{this.props.item.weight}</span>
                <h3>{this.props.item.name}</h3>
                <span className="description">{this.props.item.description}</span>
            </li>
        )
    }
});