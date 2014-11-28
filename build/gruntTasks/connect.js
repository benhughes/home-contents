"use strict";

var connectConfig = {
    main: {
        options: {
            port: "8080",
            base: '<%= buildOutput %>/<%= compiledOutput %>',
            hostname: ''
        }
    }
};


module.exports = function (grunt) {

    grunt.config('connect', connectConfig);

    grunt.loadNpmTasks('grunt-contrib-connect');

};