"use strict";

var itemData = require('../../../src/data/item.data');

describe("item.data", function () {
    describe('getHeaviestByRoom', function () {
        it('should return the heaviest for the room supplied', function () {
            var testData = [
                {"weight": 1},
                {"weight": 2},
                {"weight": 3}
            ];
            spyOn(itemData, 'filterByRoom').and.returnValue(testData);
            var answer = itemData.getHeaviestByRoom("test");
            expect(itemData.filterByRoom).toHaveBeenCalledWith("test");
            expect(answer).toEqual([{"weight": 3}, {"weight": 2}]);
        });
        it('should ignore non numbers the heaviest for the room supplied', function () {
            var testData = [
                {"weight": 1},
                {"weight": "23"},
                {"weight": 3}
            ];
            spyOn(itemData, 'filterByRoom').and.returnValue(testData);
            var answer = itemData.getHeaviestByRoom("test");
            expect(answer).toEqual([{"weight": 3}, {"weight": 1}]);
        });
        it('should not return any items with 0 weight', function () {
            var testData = [
                {"weight": 1},
                {"weight": 0},
                {"weight": 0}
            ];
            spyOn(itemData, 'filterByRoom').and.returnValue(testData);
            var answer = itemData.getHeaviestByRoom("test");
            expect(answer).toEqual([{"weight": 1}]);
        });
    });
    describe('filterByRoom', function () {
        it('should return items from data that match the supplied room', function () {
            var testData = [
                {"room": "test"},
                {"room": "test"},
                {"room": "nottest"}
            ];
            spyOn(itemData, 'getData').and.returnValue(testData);
            expect(itemData.filterByRoom("test").length).toEqual(2);
        });
        it('should return empty array if no rooms match the supplied room', function () {
            var testData = [
                {"room": "notest"},
                {"room": "notest"},
                {"room": "nottest"}
            ];
            spyOn(itemData, 'getData').and.returnValue(testData);
            expect(itemData.filterByRoom("test").length).toEqual(0);
        });
    });
    describe('getFragileItemsForRoom', function () {
        it('should return the fragile items for the room supplied', function () {
            var testData = [
                {"fragile": true},
                {"fragile": true},
                {"fragile": false}
            ];
            spyOn(itemData, 'filterByRoom').and.returnValue(testData);
            expect(itemData.getFragileItemsForRoom("test").length).toEqual(2);
            expect(itemData.filterByRoom).toHaveBeenCalledWith("test");
        });
    });
    describe('getNonFragileItemsForRoom', function () {
        it('should return the non fragile items for the room supplied', function () {
            var testData = [
                {"fragile": true},
                {"fragile": true},
                {"fragile": false}
            ];
            spyOn(itemData, 'filterByRoom').and.returnValue(testData);
            expect(itemData.getNonFragileItemsForRoom("test").length).toEqual(1);
            expect(itemData.filterByRoom).toHaveBeenCalledWith("test");
        });
    });
});