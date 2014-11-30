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
            React.render(<EditItem editable={this.props.editable} item={itemData} id={newRow.name()} />, document.getElementById('popup'));
        }.bind(this));
    },
    render: function() {
        var language = lang("en"),
            rows = [],
            editable = this.props.editable !== false ? (<li className="addItem"><a ref="addItemButton" href="#" onClick={this.onAddItemClick}>{language.addItem}</a></li>) : "",
            items = this.props.items;

        for (var i = 0; i < items.length; i++) {
            rows.push(<ListItem key={items[i].id} id={items[i].id} item={items[i]}/>);
        }


        return (
            <li className={["roomList", "roomList-" + this.props.id].join(' ')}>
                <h2 id={this.props.id}>{this.props.room.name}</h2>
                <ul>
                    {rows}
                    {editable}
                </ul>
            </li>
        );
    }
});