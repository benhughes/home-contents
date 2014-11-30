"use strict";

var proxyquire = require('proxyquireify')(require),
    ListLang = require('../../../src/components/roomList/lang')("en");


describe('roomItem.jsx', function () {
    var instance, RoomList, stubs,
        React = require("react/addons"),
        TestUtils = React.addons.TestUtils;

    require('../../../src/components/roomList/roomList.jsx');

    beforeEach(function () {
        stubs = {
            '../../data/item.data': {
                getSelector: function () {console.log('getSelector'); return {};},// jasmine.createSpy('getSelector'),
                getData: jasmine.createSpy('getData'),
                filterByRoom: jasmine.createSpy('filterByRoom')
            }
        };
        RoomList = proxyquire('../../../src/components/roomList/roomList.jsx', stubs);
    });

    afterEach(function() {
        if (instance && instance.isMounted()) {
            // Only components with a parent will be unmounted
            React.unmountComponentAtNode(instance.getDOMNode().parent);
        }
    });
    it('should write correct dom items from passed props', function () {
        var testData = {
            name: "Test Room"
        };

        console.log(stubs['../../data/item.data'].filterByRoom.andReturn);

        var listItem = (
            <RoomList key={0} id="idstring" room={testData} />
        );
        instance = TestUtils.renderIntoDocument(listItem);

        var h2 = TestUtils.findRenderedDOMComponentWithTag(instance, 'h2');
        expect(h2.getDOMNode().textContent).toEqual(testData.name);
    });
    //describe('clicking add button', function () {
    //    it('should launch edit view passing the props as the new props', function () {
    //        var testData = {
    //            name: "Test Room"
    //        };
    //
    //        instance = TestUtils.renderIntoDocument(
    //            <RoomList key={0} id="testID" room={testData} />
    //        );
    //        //var container = document.createElement("div");
    //        //container.id = "popup";
    //        //document.body.appendChild(container);
    //
    //
    //        spyOn(React, 'render');
    //
    //        React.addons.TestUtils.Simulate.click(instance.refs.addItemButton.getDOMNode());
    //        //best way I can determine that the right things are being called
    //        //better knowledge of React would help here :)
    //        expect(stubs['../../data/item.data'].getSelector).toHaveBeenCalled();
    //        expect(react['../../data/item.data'].getSelector).toHaveBeenCalled();
    //        //expect(React.render.calls.argsFor(0)[0]._store.props.item).toBe(testData);
    //        //expect(React.render.calls.argsFor(0)[1]).toBe(container);
    //
    //    })
    //})


});