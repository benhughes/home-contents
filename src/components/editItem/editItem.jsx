"use strict";

var React = require('react'),
    roomData = require('../../data/rooms.data'),
    itemDataSelector = require('../../data/item.data').getSelector(),
    lang = require('./lang');

var ENTER_KEY = 13;

//React.unmountComponentAtNode(document.getElementById('container'));
var EditItem = React.createClass({
    getInitialState: function() {
        // naming it initialX clearly indicates that the only purpose
        // of the passed down prop is to initialize something internally
        return {
            itemName: this.props.item.name,
            itemDescription: this.props.item.description,
            itemWeight: this.props.item.weight,
            itemRoom: this.props.item.room,
            itemFragile: this.props.item.fragile
        };
    },
    removeComponent: function () {
        React.unmountComponentAtNode(document.getElementById('popup'));
    },

    saveState: function (callBack) {
        itemDataSelector.child(this.props.id).set({
            name: this.state.itemName,
            description: this.state.itemDescription,
            fragile: this.state.itemFragile,
            weight: this.state.itemWeight,
            room: this.state.itemRoom
        }, callBack);
    },

    openNew: function () {
        var newDefault = {
            "name": "",
            description: "",
            fragile: false,
            weight: 0,
            room: this.state.itemRoom
        };
        var newItem = itemDataSelector.push(newDefault, function () {
            this.removeComponent();
            React.render(<EditItem item={newDefault} id={newItem.name()} />, document.getElementById('popup'));

        }.bind(this));
    },

    handleNameChange: function (event) {
        this.setState({itemName: event.target.value});
    },
    handleDescriptionChange: function (event) {
        this.setState({itemDescription: event.target.value});
    },
    handleWeightChange: function (event) {
        this.setState({itemWeight: event.target.value});
    },
    handleFragileChange: function (event) {
        this.setState({itemFragile: event.target.value === "true"});
    },
    handleRoomChange: function (event) {
        this.setState({itemRoom: event.target.value});
    },
    onClose:function () {
        this.removeComponent();
    },
    onSaveAndClose: function () {
        this.saveState(this.removeComponent.bind(this));
    },
    onSaveAndNew: function () {
        this.saveState(this.openNew.bind(this));
    },
    onDelete: function () {
        itemDataSelector.child(this.props.id).remove(this.removeComponent.bind(this));
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
        var language = lang("en"),
            roomLists = roomData.getData(),
            roomsOptions = [];

        for (var room in roomLists) {
            roomsOptions.push(<option value={room}>{roomLists[room].name}</option>);
        }
        return (
            <div className="protection">
                <div className="editDialogue">
                    <h1>{language.title}</h1>
                    <ul>
                        <li className="textInput">
                            <label htmlFor="name">{language.nameLabel}:</label>
                            <input data-itemStateId="itemName" id="itemNameEdit" placeholder={language.nameLabel} value={this.state.itemName} onSubmit={this.onSaveAndClose} onChange={this.handleNameChange} onKeyDown={this.handleKeyDown}/>
                        </li>
                        <li className="textareaInput">
                            <label htmlFor="itemDescriptionEdit">{language.descriptionLabel}:</label>
                            <textarea id="itemDescriptionEdit" value={this.state.itemDescription} onChange={this.handleDescriptionChange}></textarea>
                        </li>
                        <li className="textInput">
                            <label htmlFor="itemWeightEdit">{language.weightLabel}:</label>
                            <input type="number" id="itemWeightEdit" value={this.state.itemWeight} onChange={this.handleWeightChange} onKeyDown={this.handleKeyDown}/>KG
                        </li>
                        <li className="optionInput">
                            <label htmlFor="itemFragileEdit">{language.fragileLabel}</label>
                            <select value={this.state.itemFragile === true ? "true" : "false"} onChange={this.handleFragileChange}>
                                <option value="true">Is Fragile</option>
                                <option value="false">Isn't Fragile</option>
                            </select>
                        </li>
                        <li className="optionInput">
                            <label htmlFor="itemRoomEdit">{language.roomLabel}</label>
                            <select value={this.state.itemRoom} onChange={this.handleRoomChange}>
                                {roomsOptions}
                            </select>
                        </li>
                    </ul>
                    <a href="#" onClick={this.onDelete}>{language.delete}</a>
                    <a href="#" onClick={this.onClose}>{language.close}</a>
                    <a href="#" onClick={this.onSaveAndClose}>{language.saveAndClose}</a>
                    <a href="#" onClick={this.onSaveAndNew}>{language.saveAndNew}</a>
                </div>
            </div>
        )

    }
});

module.exports = EditItem;