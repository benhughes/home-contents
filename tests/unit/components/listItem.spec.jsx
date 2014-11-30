"use strict";

var proxyquire = require('proxyquireify')(require),
    ListLang = require('../../../src/components/listItem/lang')("en");


describe('listItem.jsx', function () {
    var instance;
    var React = require("react/addons"),
        ListItem = require('../../../src/components/listItem/listItem.jsx'),
        TestUtils = React.addons.TestUtils;

    afterEach(function() {
        if (instance && instance.isMounted()) {
            // Only components with a parent will be unmounted
            React.unmountComponentAtNode(instance.getDOMNode().parent);
        }
    });
    it('should write correct dom items from passed props', function () {
        var testData = {
            name: "Item number 200",
            description: "This is a random item",
            fragile: true,
            weight: 200
        };

        var listItem = (
            <ListItem key={0} item={testData} />
        );
        instance = TestUtils.renderIntoDocument(listItem);

        var h3 = TestUtils.findRenderedDOMComponentWithTag(instance, 'h3');
        var descriptiion = TestUtils.findRenderedDOMComponentWithClass(instance, 'description');
        var fragileIndicator = TestUtils.findRenderedDOMComponentWithClass(instance, 'fragileIndicator');
        var weight = TestUtils.findRenderedDOMComponentWithClass(instance, 'weight');
        expect(h3.getDOMNode().textContent).toEqual(testData.name);
        expect(descriptiion.getDOMNode().textContent).toEqual(testData.description);
        expect(fragileIndicator.getDOMNode().textContent).toEqual(ListLang.fragile);
        expect(weight.getDOMNode().textContent).toEqual(testData.weight + "kg");
        expect(instance.refs.editButton.getDOMNode().textContent).toEqual(ListLang.edit);
    });
    it('should add correct classes to weight', function () {
        var testData = {
            name: "Item number 200",
            description: "This is a random item",
            fragile: true,
            weight: 200
        };

        var listItem = (
            <ListItem key={0} item={testData} />
        );
        instance = TestUtils.renderIntoDocument(listItem);
        var weight = TestUtils.findRenderedDOMComponentWithClass(instance, 'weight');
        expect(weight.getDOMNode().className.split(' ').indexOf('weightShow') !== -1).toEqual(true);

        testData.weight = 0;
        listItem = (
            <ListItem key={0} item={testData} />
        );
        instance = TestUtils.renderIntoDocument(listItem);
        weight = TestUtils.findRenderedDOMComponentWithClass(instance, 'weight');
        expect(weight.getDOMNode().className.split(' ').indexOf('weightShow') === -1).toEqual(true);

    });

    it('should add correct classes to fragileIndicator', function () {
        var testData = {
            name: "Item number 200",
            description: "This is a random item",
            fragile: true,
            weight: 200
        };

        var listItem = (
            <ListItem key={0} item={testData} />
        );
        instance = TestUtils.renderIntoDocument(listItem);
        var fragile = TestUtils.findRenderedDOMComponentWithClass(instance, 'fragileIndicator');
        expect(fragile.getDOMNode().className.split(' ').indexOf('fragileShow') !== -1).toEqual(true);

        testData.fragile = false;
        listItem = (
            <ListItem key={0} item={testData} />
        );
        instance = TestUtils.renderIntoDocument(listItem);
        fragile = TestUtils.findRenderedDOMComponentWithClass(instance, 'fragileIndicator');
        expect(fragile.getDOMNode().className.split(' ').indexOf('fragileShow') === -1).toEqual(true);

    });


    describe('clicking edit', function () {
        it('should launch edit view passing the props as the new props', function () {
            var testData = {
                name: "Item number 200",
                description: "This is a random item",
                fragile: true,
                weight: 200
            };


            instance = TestUtils.renderIntoDocument(
                <ListItem key={0} item={testData} />
            );
            var container = document.createElement("div");
            container.id = "popup";
            document.body.appendChild(container);


            spyOn(React, 'render');

            React.addons.TestUtils.Simulate.click(instance.refs.editButton.getDOMNode());
            //best way I can determine that the right things are being called
            //better knowledge of React would help here :)
            expect(React.render.calls.argsFor(0)[0]._store.props.item).toBe(testData);
            expect(React.render.calls.argsFor(0)[1]).toBe(container);

        })
    })


});