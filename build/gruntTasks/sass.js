module.exports = function (grunt) {
    'use strict';

    var sassConfig = {
        debug: {
            files: {
                '<%= buildOutput %>/<%= debugOutput %>/css/main.css': '<%= localFileInput %>/css/main.scss'
            }
        }
    };

    grunt.config('sass', sassConfig);

    grunt.loadNpmTasks('grunt-sass');

};