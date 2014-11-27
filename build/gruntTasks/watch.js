module.exports = function (grunt) {
    'use strict';

    var watchConfig = {
        debug: {
            files: ['<%= localFileInput %>/js/*.js', '<%= localFileInput %>/js/**/*.js'],
            tasks: ['browserify:debug'],
            options: {
                spawn: false,
                livereload: true
            }
        }
    };

    grunt.config('watch', watchConfig);

    grunt.loadNpmTasks('grunt-contrib-watch');

};