"use strict";

var indexPage = require('./pages/index/index.jsx'),
    userListsPage = require('./pages/userList/userList.jsx'),
    moverListPage = require('./pages/moverList/moverList.jsx');

var router = {
    getListId: function () {
        var matches = /listid=([^&#=]*)/.exec(window.location.search);
        return matches && matches[1] ? matches[1] : null;
    },
    getPage: function () {
        var matches = /page=([^&#=]*)/.exec(window.location.search);
        return matches && matches[1] ? matches[1] : null;
    },
    listToLoad: function () {
        var hash = this.getHash().substr(1).split("/");
        return (hash[0]) ? hash[0] : null;
    },
    getPageToLoad: function () {
        if (this.getListId() && this.getPage() === "moverList") {
            return moverListPage;
        } else if (this.getListId()) {
            return userListsPage;
        } else {
            return indexPage;
        }
     }
};

module.exports = router;