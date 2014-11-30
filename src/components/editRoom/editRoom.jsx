"use strict";

var React = require('react'),
    roomData = require('../../data/rooms.data'),
    lang = require('./lang');

var ENTER_KEY = 13;

var EditItem = React.createClass({
    getInitialState: function() {
        console.log('getInitialState');
        return {
            itemName: this.props.item.name
        };
    },
    removeComponent: function () {
        React.unmountComponentAtNode(document.getElementById('popup'));
    },

    saveState: function (callBack) {
        roomData.getSelector().child(this.props.id).set({
            name: this.state.itemName
        }, callBack);
    },

    handleNameChange: function (event) {
        this.setState({itemName: event.target.value});
    },
    onClose:function (event) {
        event.preventDefault();
        this.removeComponent();
    },
    onSaveAndClose: function (event) {
        if (event) {
            event.preventDefault();
        }
        this.saveState(this.removeComponent.bind(this));
    },
    onSaveAndNew: function (event) {
        event.preventDefault();
        this.saveState(this.openNew.bind(this));
    },
    onDelete: function (event) {
        event.preventDefault();
        roomData.getSelector().child(this.props.id).remove(this.removeComponent.bind(this));
    },
    handleKeyDown: function () {
        if (event.which === ENTER_KEY) {
            this.onSaveAndClose();
        }
    },
    componentDidMount: function () {
        document.getElementById('itemNameEdit').focus();
    },
    render: function() {
        var language = lang("en");

        return (
            <div className="protection">
                <div className="editDialogue">
                    <h1>{language.title}</h1>
                    <ul>
                        <li className="textInput">
                            <label htmlFor="name">{language.nameLabel}:</label>
                            <input id="itemNameEdit" value={this.state.itemName} onSubmit={this.onSaveAndClose} onChange={this.handleNameChange} onKeyDown={this.handleKeyDown}/>
                        </li>
                    </ul>
                    <div className="buttonHolder">
                        <a href="#" className="button delete" onClick={this.onDelete}>{language.delete}</a>
                        <a href="#" className="button saveAndClose" onClick={this.onSaveAndClose}>{language.saveAndClose}</a>
                        <a href="#" className="button close" onClick={this.onClose}>{language.close}</a>
                    </div>

                </div>
            </div>
        )

    }
});

module.exports = EditItem;