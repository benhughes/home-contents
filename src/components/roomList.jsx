"use strict";

var React = require('react'),
    ListItem = require('./listItem.jsx'),
    itemsData = require('../data/item.data');

module.exports = React.createClass({
    defaultItem: {
        name: "edit me",
        description: "Add a description"

    },
    onAddItemClick: function () {
        var itemData = this.defaultItem;
        console.log(this.id)
        itemData.room = this.props.id;
        itemsData.getSelector().push(this.defaultItem, this.render.bind(this));
    },
    render: function() {
        var rows = [],
            items = itemsData.filterByRoom(this.props.id);

        console.log("rooms", items, this.props);
        for (var item in items) {
            rows.push(<ListItem key={item} id={item} item={items[item]}/>);
        }
        return (
            <li className="roomlist">
                <h2>{this.props.room.name}</h2>
                <ul>
                    {rows}
                    <li className="addItem"><a onClick={this.onAddItemClick}>Add Item</a></li>
                </ul>
            </li>
        );
    }
});