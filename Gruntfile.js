module.exports = function (grunt) {
    'use strict';

    var release = false;

    grunt.initConfig({
        localFileInput: "src",
        buildOutput: "out",
        compiledOutput: release ? "release" : "debug"
    });

    grunt.registerTask('compliment', 'Outputs build information', function () {
        grunt.log.writeln('You are so awesome!');
    });

    grunt.loadTasks('build/gruntTasks');

    grunt.registerTask('build', ['clean:compiledOutput', 'copy:main', 'sass:main', 'build:js']);

    grunt.registerTask('build:js', ['browserify:main']);

    grunt.registerTask('localDev', ['build', 'connect:main', 'watch']);

    grunt.registerTask('test', ['compliment', 'test:hint', 'test:unit']);
    grunt.registerTask('test:hint', ['jshint']);
    grunt.registerTask('test:unit', ['karma:unit']);
    grunt.registerTask('test:integration', []);
    grunt.registerTask('test:coverage', []);
    grunt.registerTask('test:functional', []);
    grunt.registerTask('default', ['test']);
};
