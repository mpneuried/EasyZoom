module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('image-zoom.jquery.json'),
        uglify: {
            options: {
                banner: [
                    '/*!',
                    ' * @name        <%= pkg.name %>',
                    ' * @author      <%= pkg.author.name %> <<%= pkg.author.url %>>',
                    ' * @modified    <%= grunt.template.today("dddd, mmmm dS, yyyy") %>',
                    ' * @version     <%= pkg.version %>',
                    ' */'
                ].join('\n')
            },
            dist: {
                files: [
                    {
                        src: 'src/easyzoom.js',
                        dest: 'dist/easyzoom.js'
                    }
                ]
            }
        },
        jshint: {
            all: ['src/**/*.js'],
            options: {
                jshintrc: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['jshint', 'uglify']);

};
