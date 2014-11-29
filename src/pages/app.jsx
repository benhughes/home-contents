"use strict";

var React = require('react'),
    RoomList = require('./../components/roomList.jsx'),
    roomData = require('./../data/rooms.data.js');

module.exports = React.createClass({
    render: function() {
        var rooms = [],
            roomLists = roomData.getData();

        console.log("app", roomLists)
        for (var room in roomLists) {
            console.log(roomLists[room]);
            rooms.push(<RoomList key={room} id={room} room={roomLists[room]}/>);
        }
        return (
            <div className="list">
                <h2>The List</h2>
                <ul>
                    {rooms}
                </ul>
            </div>
        );
    }
});