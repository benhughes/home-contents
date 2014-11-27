var browserifyConfig = {
    debug: {
        files: {
            '<%= buildOutput %>/<%= debugOutput %>/js/main.js': ['src/js/*.js', 'src/js/**/*.js']
        }
    },
    release: {
        files: {
            '<%= buildOutput %>/<%= releaseOutput %>/js/main.js': ['src/js/*.js', 'src/js/**/*.js']
        }
    }

};


module.exports = function (grunt) {

    grunt.config('browserify', browserifyConfig);

    grunt.loadNpmTasks('grunt-browserify');

};