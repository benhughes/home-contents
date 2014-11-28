module.exports = function (grunt) {
    'use strict';

    var jshintConfig = {
        js: {
            options: {
                jshintrc: '.jshintrc'
            },
            files: {
                src: ['src/js/**/*.js']
            }
        },
        build: {
            options: {
                jshintrc: 'build/gruntTasks/.jshintrc'
            },
            files: {
                src: ['build/gruntTasks/*.js']
            }

        }
    };

    grunt.config('jshint', jshintConfig);

    grunt.loadNpmTasks('grunt-contrib-jshint');

};