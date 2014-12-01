"use strict";

var React = require('react'),
    lang = require('./lang');


module.exports = React.createClass({
    getInitialState: function() {
        return {
            listId: ""
        };
    },
    handleListIdChange: function (event) {
        this.setState({listId: event.target.value});
    },
    onSubmit:function () {
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