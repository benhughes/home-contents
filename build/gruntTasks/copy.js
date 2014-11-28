"use strict";

var copyConfig = {
    main: {
        files: [
            {
                expand: true,
                cwd: '<%= localFileInput %>',
                src: [
                    'index.html'
                ],
                dest: '<%= buildOutput %>/<%= compiledOutput %>'
            }
        ]
    }
};


module.exports = function (grunt) {

    grunt.config('copy', copyConfig);
    grunt.loadNpmTasks('grunt-contrib-copy');
};