"use strict";

var istanbul = require('browserify-istanbul');

var karmaConfig = {
    options: {
        basePath: '',
        frameworks: ['jasmine', 'browserify'],
        reporters: ['dots', 'coverage'],
        preprocessors: {
            'tests/unit/**/*.spec.js': [ 'browserify'],
            'tests/unit/**/*.spec.jsx': [ 'browserify']
        },
        coverageReporter: {
            type: 'html',
            dir: 'out/test-results/unit/'
        },
        browserify: {
            transform: ['reactify'],
            extensions: ['.jsx']
        },
        port: 9876,
        colors: true,
        autoWatch: false,
        browsers: ['PhantomJS'],
        captureTimeout: 60000,
        singleRun: true
    },
    unit: {
        options: {
            files: [
                'tests/unit/helpers/bind.polyfill.js',
                'tests/unit/**/*.spec.js',
                'tests/unit/**/*.spec.jsx'
            ]
        }
    }
};


module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-karma');
    grunt.config('karma', karmaConfig);
};