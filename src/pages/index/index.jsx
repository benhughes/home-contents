"use strict";

var React = require('react'),
    lang = require('./lang'),
    RoomList = require('./../../components/roomList/roomList.jsx'),
    roomData = require('./../../data/rooms.data.js'),
    itemsData = require('../../data/item.data');


module.exports = React.createClass({
    getInitialState: function() {
        // naming it initialX clearly indicates that the only purpose
        // of the passed down prop is to initialize something internally
        return {
            listId: ""
        };
    },
    handleListIdChange: function (event) {
        this.setState({listId: event.target.value});
    },
    onSubmit:function () {
        console.log('here', "/?listid=" + this.state.listId)
        location.href = "/?listid=" + this.state.listId;
    },

    render: function() {
        return (
            <div className="page userList">
                <h1>Welcome please input your list id</h1>
                <h2>If you're new just type in a unique name (something you'll remember) and press submit</h2>
                <input name="listId" placeholder="unique list name" value={this.state.listId} onSubmit={this.onSubmit} onChange={this.handleListIdChange}/><a href="#" onClick={this.onSubmit}>Submit</a>
            </div>
        );
    }
});