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
                dest: 'public/css/style.min.css',
                keepSpecialComments: '0'
            }
        },

        jshint: {
            files: ["src/js/script.js", "Gruntfile.js"]
        },

        concat: {
            options: {
                separator: ''
            },
            dist: {
                src: ['components/jquery/**/*.js',
                      'components/**/*.min.js',
                      'src/js/*.js'],
                dest: 'public/js/script.min.js'
            }
        },


        uglify: {
            dist: {
                files: {
                    'public/js/script.min.js': ['public/js/script.min.js'],
                }
            }
        },
            
        watch: {
          scripts: {
            files: ['src/**/*.*', 'src/*.*'],
            tasks: ['jshint', 'concat',  'cssmin', 'copy'],
            options: {
              spawn: false,
            },
          },
        },
        
          copy: {
            main: {
              files: [
                // includes files within path and its sub-directories
                {expand: true, cwd: 'components/simpleicons/icons/php', src: ['**'], dest: 'public/img/icons/php'},
                {expand: true, cwd: 'components/simpleicons/icons/aws', src: ['**'], dest: 'public/img/icons/aws'},
                {expand: true, cwd: 'components/simpleicons/icons/mysql', src: ['**'], dest: 'public/img/icons/mysql'},
                {expand: true, cwd: 'components/simpleicons/icons/html5', src: ['**'], dest: 'public/img/icons/html5'},
                {expand: true, cwd: 'components/simpleicons/icons/jquery', src: ['**'], dest: 'public/img/icons/jquery'},
                {expand: true, cwd: 'components/simpleicons/icons/css3', src: ['**'], dest: 'public/img/icons/css3'},
                {expand: true, cwd: 'components/font-awesome/fonts', src: ['**'], dest: 'public/fonts/'},
                {expand: true, cwd: 'src/img/', src: ['**'], dest: 'public/img/'},
                {src: 'src/index.html', dest: 'public/index.html'},  

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
    grunt.loadNpmTasks('grunt-contrib-watch'); 

    grunt.registerTask('build', ['jshint', 'bower:install', 'concat', 'uglify', 'cssmin', 'copy', 'bower:clean']); 
    grunt.registerTask('dev', ['jshint', 'bower:install', 'concat',  'cssmin', 'copy', 'watch']);


};