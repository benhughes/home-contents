var connectConfig = {
    debug: {
        options: {
            port: "8080",
            base: '<%= buildOutput %>/<%= debugOutput %>',
            hostname: ''
        }
    },
    release: {
        options: {
            port: "8080",
            base: 'src',
            keepalive: true,
            hostname: ''
        }
    }
};


module.exports = function (grunt) {

    grunt.config('connect', connectConfig);

    grunt.loadNpmTasks('grunt-contrib-connect');

};