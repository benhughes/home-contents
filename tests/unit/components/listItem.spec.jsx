"use strict";


describe('listItem.jsx', function () {
        it('should exist', function () {
            var React = require("react/addons"),
                ListItem = require('../../../src/components/listItem.jsx'),
                TestUtils = React.addons.TestUtils,
                testData = {
                    name: "Item number 200",
                    description: "This is a random item"
                };

            // Render a checkbox with label in the document
            var renderedListItem = TestUtils.renderIntoDocument(
                <ListItem key={0} item={testData} />
            );

            // Verify that it's Off by default
            var h3 = TestUtils.findRenderedDOMComponentWithTag(renderedListItem, 'h3');
            var span = TestUtils.findRenderedDOMComponentWithTag(renderedListItem, 'span');
            expect(h3.getDOMNode().textContent).toEqual(testData.name);
            expect(span.getDOMNode().textContent).toEqual(testData.description);
        });

});