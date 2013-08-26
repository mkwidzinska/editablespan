module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
     uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'build/mk-editable-span.js',
        dest: 'build/mk-editable-span.min.js',
      }
    }
  });
  grunt.registerTask('default', ['uglify']);
};