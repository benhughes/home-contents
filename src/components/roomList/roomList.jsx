"use strict";

var React = require('react'),
    lang = require('./lang'),
    ListItem = require('./../listItem/listItem.jsx'),
    itemsData = require('../../data/item.data.js');

module.exports = React.createClass({
    defaultItem: {
        name: "edit me",
        description: "Add a description",
        weight: 0,
        fragile: false
    },
    onAddItemClick: function (event) {
        event.preventDefault();
        var itemData = this.defaultItem;
        console.log(this.id)
        itemData.room = this.props.id;
        itemsData.getSelector().push(this.defaultItem, this.render.bind(this));
    },
    render: function() {
        var language = lang("en"),
            rows = [],
            items = itemsData.filterByRoom(this.props.id);

        console.log("rooms", items, this.props);
        for (var item in items) {
            rows.push(<ListItem key={item} id={item} item={items[item]}/>);
        }
        return (
            <li className={["roomList", "roomList-" + this.props.id].join(' ')}>
                <h2 id={this.props.id}>{this.props.room.name}</h2>
                <ul>
                    {rows}
                    <li className="addItem"><a href="#" onClick={this.onAddItemClick}>{language.addItem}</a></li>
                </ul>
            </li>
        );
    }
});