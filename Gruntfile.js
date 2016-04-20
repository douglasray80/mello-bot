module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        reporter: require('jshint-stylish'),
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        },
      },
      files: {
      	src: ['*.js', '!Gruntfile.js']
      },
    },
    concat: {
      options: {
        stripBanners: true,
        banner: 'var loadTemplates = ',
        footer: ";"
      },
      dist: {
        src: 'assets/templates/templates.json',
        dest: 'assets/templates/templates.js',
      },
    },
    watch: {
      options: {
        livereload: true
      },
      js: {
        files: ['**/*.js'],
        tasks: ['jshint']
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');


  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('dev', ['concat']);
  grunt.registerTask('dev-watch', ['concat', 'watch']);

};
