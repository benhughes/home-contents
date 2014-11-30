"use strict";

var React = require('react'),
    lang = require('./lang'),
    RoomList = require('./../../components/roomList/roomList.jsx'),
    roomData = require('./../../data/rooms.data.js'),
    itemsData = require('../../data/item.data');


module.exports = React.createClass({
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
                </div>
            </div>
        );
    }
});