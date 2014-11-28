module.exports = function (grunt) {
    'use strict';

    var watchConfig = {
        browserify: {
            files: [
                '<%= localFileInput %>/js/*.js',
                '<%= localFileInput %>/js/**/*.js',
                '<%= localFileInput %>/js/**/*.jsx'
            ],
            tasks: ['build:js'],
            options: {
                spawn: false,
                livereload: true
            }
        },
        sass: {
            files: ['<%= localFileInput %>/css/*.scss'],
            tasks: ['sass:main'],
            options: {
                spawn: false,
                livereload: true
            }
        }
    };

    grunt.config('watch', watchConfig);

    grunt.loadNpmTasks('grunt-contrib-watch');

};