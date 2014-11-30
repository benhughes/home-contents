var convertFBObjectToArray = require('../../../src/utils/convertFBObjectToArray');

describe("convertFBObjectToArray", function () {
    it('should convert object into array adding the key as the ID', function () {
        var obj = {
                test: {val: "something", again: "soemthingElse"},
                test2: {val: "somethingElse", again: "soemthingElseAgain"}
            },
            expected = [
                { val: 'something', again: 'soemthingElse', id: 'test' },
                { val: 'somethingElse', again: 'soemthingElseAgain', id: 'test2'}
            ];
        expect(convertFBObjectToArray(obj)).toEqual(expected);
    });
    it('should return empty array if data is falsy', function () {
        expect(convertFBObjectToArray({})).toEqual([]);
        expect(convertFBObjectToArray("")).toEqual([]);
        expect(convertFBObjectToArray(0)).toEqual([]);
        expect(convertFBObjectToArray()).toEqual([]);

    });
});