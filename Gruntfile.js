module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        localFileInput: "src",
        buildOutput: "out",
        releaseOutput: "release",
        debugOutput: "debug"
    });

    grunt.registerTask('compliment', 'Outputs build information', function () {
        grunt.log.writeln('You are so awesome!');
    });

    grunt.loadTasks('build/gruntTasks');

    grunt.registerTask('build', ['compliment', 'test']);
    grunt.registerTask('build:debug', ['clean:debug', 'copy:debug', 'sass:debug', 'browserify:debug']);

    grunt.registerTask('localDev', ['build:debug', 'connect:debug', 'watch']);

    grunt.registerTask('test', ['compliment']);
    grunt.registerTask('test:hint', []);
    grunt.registerTask('test:unit', []);
    grunt.registerTask('test:integration', []);
    grunt.registerTask('test:coverage', []);
    grunt.registerTask('test:functional', []);
    grunt.registerTask('default', ['test']);
};
