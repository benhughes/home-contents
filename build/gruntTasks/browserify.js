"use strict";

var browserifyConfig = {
    options: {
        debug: true,
        transform: ['reactify'],
        extensions: ['.jsx']
    },
    main: {
        files: {
            '<%= buildOutput %>/<%= compiledOutput %>/js/main.js': [
                '<%= localFileInput %>/js/*.js',
                '<%= localFileInput %>/js/**/*.js',
                '<%= localFileInput %>/js/views/*.jsx'
            ]
        }
    }

};


module.exports = function (grunt) {

    grunt.config('browserify', browserifyConfig);

    grunt.loadNpmTasks('grunt-browserify');

};