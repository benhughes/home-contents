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
            <RoomList key={0} id="idstring" room={testData} items={[]}/>
        );
        instance = TestUtils.renderIntoDocument(listItem);

        var h2 = TestUtils.findRenderedDOMComponentWithTag(instance, 'h2');
        expect(h2.getDOMNode().textContent).toEqual(testData.name);
    });
});