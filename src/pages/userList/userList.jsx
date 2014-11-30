"use strict";

var React = require('react'),
    lang = require('./lang'),
    RoomList = require('./../../components/roomList/roomList.jsx'),
    roomData = require('./../../data/rooms.data.js');

module.exports = React.createClass({
    render: function() {
        var rooms = [],
            language = lang("en"),
            roomLists = roomData.getData();

        console.log("app", roomLists)
        for (var room in roomLists) {
            console.log(roomLists[room]);
            rooms.push(<RoomList key={room} id={room} room={roomLists[room]}/>);
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