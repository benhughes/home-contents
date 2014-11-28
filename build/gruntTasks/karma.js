"use strict";

var karmaConfig = {
    options: {
        basePath: '',
        frameworks: ['jasmine', 'browserify'],
        reporters: ['dots'],
        preprocessors: {
            'tests/unit/*.spec.js': [ 'browserify', ]
        },
        coverageReporter: {
            type: 'html',
            dir: 'out/test/unit/'
        },
        junitReporter: {
            outputFile: 'out/test/test-results-unit.xml'
        },
        browserify: {
            transform: [ 'reactify' ],
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
            files: ['tests/unit/*.spec.js'],
            reporters: ['dots']
        }
    }
};


module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-karma');
    grunt.config('karma', karmaConfig);
};