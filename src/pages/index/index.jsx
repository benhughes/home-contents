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
        var language = lang("en");
        return (
            <div className="page userList">
                <div className="messageHolder">
                    <h1>{language.pageTitle}</h1>
                    <p><strong>{language.messagePart1}</strong>{language.messagePart2}</p>
                    <input name="listId" placeholder="unique list name" value={this.state.listId} onSubmit={this.onSubmit} onChange={this.handleListIdChange}/><a href="#" onClick={this.onSubmit}>Submit</a>
                </div>
            </div>
        );
    }
});