var router = require('../../src/router'),
    indexPage = require('../../src/pages/index/index.jsx'),
    userListsPage = require('../../src/pages/userList/userList.jsx'),
    moverListPage = require('../../src/pages/moverList/moverList.jsx');

describe("router", function () {
    describe('getPageToLoad', function () {
        beforeEach(function () {
            spyOn(router, 'getListId');
            spyOn(router, 'getPage');
        });
        it('should return index getListId is null', function () {
            router.getListId.and.returnValue(null);
            router.getPage.and.returnValue("moverList");
            expect(router.getPageToLoad()).toEqual(indexPage);
        });
        it('should moverListPage when there is a listId and the page is moverList', function () {
            router.getListId.and.returnValue("something");
            router.getPage.and.returnValue("moverList");
            expect(router.getPageToLoad()).toEqual(moverListPage);
        });
        it('should return userListsPage when page is not moverList and there is a listId', function () {
            router.getListId.and.returnValue("test");
            router.getPage.and.returnValue("somethingelse");

            expect(router.getPageToLoad()).toEqual(userListsPage);
        });
    });
});