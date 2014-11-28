module.exports = function (grunt) {
    'use strict';

    var uglifyConfig = {
        main: {
            options: {
                sourceMap: true
            },
            files: {
                '<%= buildOutput %>/<%= compiledOutput %>/js/main.js': ['<%= buildOutput %>/<%= compiledOutput %>/js/main.js']
            }
        }
    };

    grunt.config('uglify', uglifyConfig);

    grunt.loadNpmTasks('grunt-contrib-uglify');
};