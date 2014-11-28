"use strict";

var karmaConfig = {
    options: {
        basePath: '',
        frameworks: ['jasmine', 'browserify'],
        reporters: ['dots', 'coverage'],
        preprocessors: {
            'tests/unit/*.spec.js': [ 'browserify'],
            'src/**/*.js': ['coverage']
        },
        coverageReporter: {
            type: 'html',
            dir: 'out/test-results/unit/'
        },
        junitReporter: {
            outputFile: 'out/test/test-results-unit.xml'
        },
        browserify: {
            transform: ['browserify-istanbul','reactify' ],
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
            files: ['tests/unit/*.spec.js']

        }
    }
};


module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-karma');
    grunt.config('karma', karmaConfig);
};