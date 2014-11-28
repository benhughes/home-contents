module.exports = function (grunt) {
    'use strict';

    var jshintConfig = {
        options: {
            jshintrc: true
        },
        files: ['src/js/**/*.js']
    };

    grunt.config('jshint', jshintConfig);

    grunt.loadNpmTasks('grunt-contrib-jshint');

};