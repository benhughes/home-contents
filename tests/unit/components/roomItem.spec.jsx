"use strict";

describe('roomItem.jsx', function () {
    var instance, stubs,
        React = require("react/addons"),
        RoomList = require('../../../src/components/roomList/roomList.jsx'),
        TestUtils = React.addons.TestUtils;

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

        var listItem = (
            <RoomList key={0} id="idstring" room={testData} items={[]}/>
        );
        instance = TestUtils.renderIntoDocument(listItem);

        var h2 = TestUtils.findRenderedDOMComponentWithTag(instance, 'h2');
        expect(h2.getDOMNode().textContent).toEqual(testData.name + " Edit"); //There is now an edit button in there
    });
});