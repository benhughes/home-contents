"use strict";

var React = require('react'),
    lang = require('./lang'),
    EditItem = require('../editItem/editItem.jsx');


module.exports = React.createClass({
    onEditClick: function (event) {
        event.preventDefault();
        React.render(<EditItem item={this.props.item} id={this.props.id} />, document.getElementById('popup'));
    },
    render: function() {
        var language = lang("en");

        return (
            <li className={["listItem", "listItem-" + this.props.id, this.props.editable ? "editable" : ""].join(' ')}>

                <h3>{this.props.item.name}</h3>
                <p className="description">{this.props.item.description}</p>
                <div className="bottomInfo">
                    <span className={["fragileIndicator", this.props.item.fragile ? "fragileShow": ""].join(' ')}>
                        {language.fragile}
                    </span>
                    <span className={["weight", this.props.item.weight > 0 ? "weightShow" : ""].join(" ")}>{this.props.item.weight}kg</span>
                    <a ref="editButton" className="edit" href="#" onClick={this.onEditClick}>{language.edit}</a>
                </div>

            </li>
        )
    }
});