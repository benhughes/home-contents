"use strict";

var React = require('react'),
    roomData = require('../../data/rooms.data'),
    itemData = require('../../data/item.data'),
    lang = require('./lang');

var ENTER_KEY = 13;

var EditItem = React.createClass({
    getInitialState: function() {
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
        itemData.getSelector().child(this.props.id).set({
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
        var newItem = itemData.getSelector().push(newDefault, function () {
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
        var number = parseInt(event.target.value) || 0;
        this.setState({itemWeight: number});
    },
    handleFragileChange: function (event) {
        this.setState({itemFragile: event.target.value === "true"});
    },
    handleRoomChange: function (event) {
        this.setState({itemRoom: event.target.value});
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
        itemData.getSelector().child(this.props.id).remove(this.removeComponent.bind(this));
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
                            <input id="itemNameEdit" placeholder={language.nameLabel} value={this.state.itemName} onSubmit={this.onSaveAndClose} onChange={this.handleNameChange} onKeyDown={this.handleKeyDown}/>
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
                    <div className="buttonHolder">
                        <a href="#" className="button delete" onClick={this.onDelete}>{language.delete}</a>
                        <a href="#" className="button saveAndClose" onClick={this.onSaveAndClose}>{language.saveAndClose}</a>
                        <a href="#" className="button saveAndNew" onClick={this.onSaveAndNew}>{language.saveAndNew}</a>
                        <a href="#" className="button close" onClick={this.onClose}>{language.close}</a>
                    </div>

                </div>
            </div>
        )

    }
});

module.exports = EditItem;