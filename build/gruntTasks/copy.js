var copyConfig = {
    debug: {
        files: [
            {
                expand: true,
                cwd: '<%= localFileInput %>',
                src: [
                    'index.html'
                ],
                dest: '<%= buildOutput %>/<%= debugOutput %>'
            }
        ]
    }
};


module.exports = function (grunt) {

    grunt.config('copy', copyConfig);
    grunt.loadNpmTasks('grunt-contrib-copy');
};