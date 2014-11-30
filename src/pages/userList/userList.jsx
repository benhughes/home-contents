"use strict";

var React = require('react'),
    lang = require('./lang'),
    appData = require('../../data/app.data.js'),
    RoomList = require('./../../components/roomList/roomList.jsx'),
    EditRoom = require('./../../components/editRoom/editRoom.jsx'),
    roomData = require('./../../data/rooms.data.js'),
    itemsData = require('../../data/item.data');


module.exports = React.createClass({
    getInitialState: function () {
        appData.initialize().on('value', this.dataChanged);
        return {loading: true};
    },
    dataChanged:function () {
        this.setState({"loading": false});
        if (!roomData.getSelector()) {
            roomData.initialize();
        }
        if(!itemsData.getSelector()) {
            itemsData.initialize();
        }
        console.log('here');
        this.forceUpdate();
    },
    onAddRoomClick: function (event) {
        event.preventDefault();
        console.log('here');
        var itemData = {name: "Room"};
        //add a new item and then open the editor to edit that item
        var newRoom = roomData.getSelector().push(itemData, function () {
            console.log('here inside')
            React.render(<EditRoom item={itemData} id={newRoom.name()} />, document.getElementById('popup'));
        }.bind(this));
    },

    render: function() {
        var rooms = [],
            language = lang("en"),
            roomLists = roomData.getData();

        for (var room in roomLists) {
            rooms.push(<RoomList key={room} id={room} room={roomLists[room]} items={itemsData.filterByRoom(room)}/>);
        }
        return (
            <div className="page userList">
                <div className="list">
                    <h1>{language.pageTitle}</h1>
                    <ul>
                        {rooms}
                    </ul>
                    <a href="#" onClick={this.onAddRoomClick}>{language.addRoom}</a>
                </div>
            </div>
        );
    }
});