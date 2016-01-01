'use strict';

module.exports = function (grunt) {
  // load all grunt tasks
  grunt.initConfig({
    watch: {
      scripts: {
        files: [
            'js/*.js',
            'index.html',
            'levels.json'
        ],
        options: {
          spawn: false
        },
        tasks: ['uglify']
      }
    },
    connect: {
      server: {
        options: {
          port: 9000,
          base: './'
        }
      }
    },
    uglify: {
      all_src : {
        options : {
          livereload: true,
          sourceMap : true,
          sourceMapName : 'sourceMap.map'
        },
        src : 'js/*.js',
        dest : 'script.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['uglify', 'connect', 'watch']);
};
