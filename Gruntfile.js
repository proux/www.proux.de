module.exports = function (grunt) {

    var cwd = process.cwd();

    grunt.initConfig({

        gitclone: {
            clone: {
                options: {
                    repository: 'https://github.com/danleech/simple-icons.git',
                    branch: 'e039cf72ab614354fef90ca211b2f768e8cba426',
                    directory: 'simpleicons'
                }
            }
        },

        cssmin: {
            minify: {
                src: ['style.min.css'],
                dest: 'public/css/style.min.css'
            }
        },

        jshint: {
            files: ['src/js/*', 'Gruntfile.js']
        },

        concat: {
            js: {
                src: ['node_modules/jquery/dist/jquery.js',
                      'node_modules/bootstrap/dist/js/bootstrap.js',
                      'src/js/*.js'],
                dest: 'public/js/script.min.js',
                options: {
                    separator: ''
                }
            },
            css: {
                src: ['node_modules/bootstrap/dist/css/bootstrap.css',
                'node_modules/font-awesome/css/font-awesome.css',
                'src/css/*.css'],
                dest: 'style.min.css',
                options: {
                    separator: ''
                }
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
            tasks: ['jshint', 'concat',  'cssmin', 'uncss', 'copy'],
            options: {
              spawn: false,
            },
          },
        },

          copy: {
            main: {
              files: [
                {expand: true, cwd: 'simpleicons/icons/php', src: ['**'], dest: 'public/img/icons/php'},
                {expand: true, cwd: 'simpleicons/icons/aws', src: ['**'], dest: 'public/img/icons/aws'},
                {expand: true, cwd: 'simpleicons/icons/mysql', src: ['**'], dest: 'public/img/icons/mysql'},
                {expand: true, cwd: 'simpleicons/icons/html5', src: ['**'], dest: 'public/img/icons/html5'},
                {expand: true, cwd: 'simpleicons/icons/jquery', src: ['**'], dest: 'public/img/icons/jquery'},
                {expand: true, cwd: 'simpleicons/icons/css3', src: ['**'], dest: 'public/img/icons/css3'},
                {expand: true, cwd: 'node_modules/font-awesome/fonts', src: ['**'], dest: 'public/fonts/'},
                {expand: true, cwd: 'src/img/', src: ['**'], dest: 'public/img/'},
                {src: 'src/index.html', dest: 'index.html'},
                {src: 'src/index.html', dest: 'public/index.html'},
                {src: ['node_modules/bootstrap/dist/css/bootstrap.css.map'], dest: 'public/css/bootstrap.css.map'}
              ]
            }
        },
        csslint: {
            src: ['src/css/*'],
            options: {
                csslintrc: '.csslintrc'
            },
        },
        validation: {
            options: {
                failHard : true,
                stoponerror : false,
                reset: true
            },
            files: {
                src: ['src/*.html']
            }
        },
        uncss: {
            dist: {
                src: ['index.html'],
                dest: 'style.min.css',
                options: {
                    report: 'gzip',
                    stylesheets : ['style.min.css'],
                    csspath: '/',
                    htmlroot: '/'
                }
            }
        }


    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-html-validation');
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-git');

    grunt.registerTask('build', ['gitclone', 'concat:js', 'concat:css', 'uglify',  'copy', 'uncss', 'cssmin']);
    grunt.registerTask('dev', ['gitclone', 'concat:js','concat:css',  'copy', 'uncss', 'cssmin', 'watch']);
    grunt.registerTask('test', ['jshint', 'csslint', 'validation']);


};
