var cleanConfig = {
    out: ["<%= buildOutput %>"],
    debug: '<%= buildOutput %>/<%= debugOutput %>'
};

module.exports = function (grunt) {

    grunt.config('clean', cleanConfig);
    grunt.loadNpmTasks('grunt-contrib-clean');
};