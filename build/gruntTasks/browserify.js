var browserifyConfig = {
    debug: {
        files: {
            '<%= buildOutput %>/<%= debugOutput %>/js/main.js': ['<%= localFileInput %>/js/*.js', '<%= localFileInput %>/js/**/*.js']
        }
    },
    release: {
        files: {
            '<%= buildOutput %>/<%= releaseOutput %>/js/main.js': ['<%= localFileInput %>/js/*.js', '<%= localFileInput %>/js/**/*.js']
        }
    }

};


module.exports = function (grunt) {

    grunt.config('browserify', browserifyConfig);

    grunt.loadNpmTasks('grunt-browserify');

};