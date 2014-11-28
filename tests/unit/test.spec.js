"use strict";

var testLib = require('../../src/js/test');

describe('test', function () {
    it('should exist', function () {
        expect(typeof testLib).not.toBe("undefined");
    });
});