"use strict";

var cleanConfig = {
    out: ["<%= buildOutput %>"],
    compiledOutput: '<%= buildOutput %>/<%= compiledOutput %>'
};

module.exports = function (grunt) {

    grunt.config('clean', cleanConfig);
    grunt.loadNpmTasks('grunt-contrib-clean');
};