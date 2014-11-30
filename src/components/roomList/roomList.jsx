"use strict";

var React = require('react'),
    lang = require('./lang'),
    ListItem = require('./../listItem/listItem.jsx'),
    EditItem = require('../editItem/editItem.jsx'),
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
    render: function() {
        var language = lang("en"),
            rows = [],
            items = itemsData.filterByRoom(this.props.id) || [];

        for (var item in items) {
            rows.push(<ListItem key={item} id={item} item={items[item]}/>);
        }
        return (
            <li className={["roomList", "roomList-" + this.props.id].join(' ')}>
                <h2 id={this.props.id}>{this.props.room.name}</h2>
                <ul>
                    {rows}
                    <li className="addItem"><a ref="addItemButton" href="#" onClick={this.onAddItemClick}>{language.addItem}</a></li>
                </ul>
            </li>
        );
    }
});