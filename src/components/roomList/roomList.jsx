"use strict";

var React = require('react'),
    lang = require('./lang'),
    ListItem = require('./../listItem/listItem.jsx'),
    EditItem = require('../editItem/editItem.jsx'),
    EditRoom = require('../editRoom/editRoom.jsx'),
    itemsData = require('../../data/item.data');

module.exports = React.createClass({
    defaultItem: {
        name: "",
        description: "",
        weight: 0,
        fragile: false
    },
    onAddItemClick: function (event) {
        event.preventDefault();
        var itemData = this.defaultItem;
        itemData.room = this.props.id;
        //add a new item and then open the editor to edit that item
        var newRow = itemsData.getSelector().push(this.defaultItem, function () {
            React.render(<EditItem item={itemData} id={newRow.name()} />, document.getElementById('popup'));
        }.bind(this));
    },
    onEditClick: function (event) {
        event.preventDefault();
        React.render(<EditRoom item={this.props.room} id={this.props.id} />, document.getElementById('popup'));
    },
    render: function() {
        var language = lang("en"),
            rows = [],
            editable = this.props.editable !== false ? (<li className="addItem"><a ref="addItemButton" href="#" onClick={this.onAddItemClick}>{language.addItem}</a></li>) : "",
            items = this.props.items;

        for (var i = 0; i < items.length; i++) {
            rows.push(<ListItem editable={this.props.editable} key={items[i].id} id={items[i].id} item={items[i]}/>);
        }


        return (
            <li className={["roomList", "roomList-" + this.props.id, this.props.editable !== false ? "editable" : ""].join(' ')}>
                <h2 id={this.props.id}>{this.props.room.name} <a href="#" className="edit" onClick={this.onEditClick}>{language.edit}</a></h2>
                <ul>
                    {rows}
                    {editable}
                </ul>
            </li>
        );
    }
});