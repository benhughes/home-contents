module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        buildOutput: "out",
        releaseOutput: "release"
    });

    grunt.registerTask('compliment', 'Outputs build information', function () {
        grunt.log.writeln('You are so awesome!');
    });

    grunt.loadTasks('build/gruntTasks');

    grunt.registerTask('test', ['compliment']);
    grunt.registerTask('test:hint', []);
    grunt.registerTask('test:unit', []);
    grunt.registerTask('test:integration', []);
    grunt.registerTask('test:coverage', []);
    grunt.registerTask('test:functional', []);
    grunt.registerTask('build', ['compliment', 'test']);
    grunt.registerTask('default', ['test']);
};
