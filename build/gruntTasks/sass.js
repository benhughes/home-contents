module.exports = function (grunt) {
    'use strict';

    var sassConfig = {
        main: {
            files: {
                '<%= buildOutput %>/<%= compiledOutput %>/css/main.css': '<%= localFileInput %>/css/main.scss'
            }
        }
    };

    grunt.config('sass', sassConfig);

    grunt.loadNpmTasks('grunt-sass');

};