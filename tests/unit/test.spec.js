"use strict";

var testLib = require('../../src/js/test');

describe('test', function () {
    it('should exist', function () {
        expect(typeof testLib).not.toBe("undefined");
    });
    it('should return undefined', function () {
        expect(typeof testLib()).toBe("undefined");
    });
});