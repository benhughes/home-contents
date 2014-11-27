var browserifyConfig = {
    options: {
        debug: true,
        transform: ['reactify'],
        extensions: ['.jsx'],
    },
    debug: {
        files: {
            '<%= buildOutput %>/<%= debugOutput %>/js/main.js': [
                '<%= localFileInput %>/js/*.js',
                '<%= localFileInput %>/js/**/*.js',
                '<%= localFileInput %>/js/views/*.jsx'
            ]
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