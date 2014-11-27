var browserifyConfig = {
    dist: {
        files: {
            '<%= buildOutput %>/<%= releaseOutput %>/main.js': ['src/js/*.js', 'src/js/**/*.js']
        }
    }
};


module.exports = function (grunt) {

    grunt.config('browserify', browserifyConfig);

    grunt.loadNpmTasks('grunt-browserify');

};