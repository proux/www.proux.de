/*global module:false*/
module.exports = function (grunt) {

    grunt.initConfig({

        bower: {
            install: {
                options: {
                    targetDir: './components/',
                    layout: 'byComponent',
                    install: true,
                    copy: true,
                    verbose: true,
                    cleanTargetDir: false,
                    cleanBowerDir: false,
                    bowerOptions: {}
                }
            },
            clean: {
                options: {
                    targetDir: './components/',
                    layout: 'byComponent',
                    install: false,
                    copy: false,
                    cleanTargetDir: true,
                    cleanBowerDir: true
                }
            }
        },

        cssmin: {
            minify: {
                src: ['components/**/*.css', 'src/css/*.css'],                
                dest: 'assets/css/style.min.css',
                keepSpecialComments: '0'
            }
        },

        jshint: {
            files: ["src/js/script.js", "gruntfile.js"]
        },

        concat: {
            options: {
                separator: ''
            },
            dist: {
                src: ['components/jquery/**/*.js',
                      'components/**/*.min.js',
                      'src/js/*.js'],
                dest: 'assets/js/script.min.js'
            }
        },


        uglify: {
            dist: {
                files: {
                    'assets/js/script.min.js': ['assets/js/script.min.js'],
                }
            }
        },
        
          copy: {
            main: {
              files: [
                // includes files within path and its sub-directories
                {expand: true, cwd: 'components/simpleicons/icons/php', src: ['**'], dest: 'assets/img/icons/php'},
                {expand: true, cwd: 'components/simpleicons/icons/aws', src: ['**'], dest: 'assets/img/icons/aws'},
                {expand: true, cwd: 'components/simpleicons/icons/mysql', src: ['**'], dest: 'assets/img/icons/mysql'},
                {expand: true, cwd: 'components/simpleicons/icons/html5', src: ['**'], dest: 'assets/img/icons/html5'},
                
                {expand: true, cwd: 'components/font-awesome/fonts', src: ['**'], dest: 'assets/fonts/'},
                {expand: true, cwd: 'src/img/', src: ['**'], dest: 'assets/img/'}

              ]
            }
          }


    });

    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('build', ['jshint', 'bower:install', 'concat', 'uglify', 'cssmin', 'copy', 'bower:clean']);


};