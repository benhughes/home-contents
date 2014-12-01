"use strict";

var React = require('react'),
    lang = require('./lang'),
    appData = require('../../data/app.data.js'),
    RoomList = require('./../../components/roomList/roomList.jsx'),
    roomData = require('./../../data/rooms.data.js'),
    itemsData = require('../../data/item.data');

module.exports = React.createClass({
    getInitialState: function () {
        appData.initialize().on('value', this.dataChanged);
        return {loading: true};
    },
    dataChanged:function () {
        this.setState({"loading": false});
        roomData.initialize();
        itemsData.initialize();
        this.forceUpdate();
    },
    render: function() {
        var heavyItemsByRoom,
            HeavyItemsRoomsLists = [],
            fragileItemsByRoom,
            fragileItemsRoomLists = [],
            nonFragileItemsByRoom,
            nonFragileItemsRoomLists = [],
            language = lang("en"),
            items,
            roomLists = roomData.getData();

        for (var room in roomLists) {
            heavyItemsByRoom = itemsData.getHeaviestByRoom(room);
            if (heavyItemsByRoom.length) {
                HeavyItemsRoomsLists.push(<RoomList editable={false} key={room} id={room} room={roomLists[room]} items={heavyItemsByRoom}/>);
            }
            fragileItemsByRoom = itemsData.getFragileItemsForRoom(room);
            if (fragileItemsByRoom.length) {
                fragileItemsRoomLists.push(<RoomList editable={false} key={room} id={room} room={roomLists[room]} items={fragileItemsByRoom}/>);
            }
            nonFragileItemsByRoom = itemsData.getNonFragileItemsForRoom(room);
            if (nonFragileItemsByRoom.length) {
                nonFragileItemsRoomLists.push(<RoomList editable={false} key={room} id={room} room={roomLists[room]} items={nonFragileItemsByRoom}/>);
            }
        }
        return (
            <div className="page moveList">
                <div className="list">
                    <h1>{language.pageTitle}</h1>

                    <div className={["heavyItems", "heavyItemsLength-" + HeavyItemsRoomsLists.length].join(" ")}>
                        <h2>Heavy Items</h2>
                        <ul>
                            {HeavyItemsRoomsLists}
                        </ul>
                    </div>
                    <div className={["fragileItems", "fragileItemsLength-" + fragileItemsRoomLists.length].join(" ")}>
                        <h2>Fragile Items</h2>
                        <ul>
                            {fragileItemsRoomLists}
                        </ul>
                    </div>
                    <div className={["nonFragileItems", "nonFragileItemsLength-" + nonFragileItemsRoomLists.length].join(" ")}>
                        <h2>Non Fragile Items</h2>
                        <ul>
                            {nonFragileItemsRoomLists}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
});