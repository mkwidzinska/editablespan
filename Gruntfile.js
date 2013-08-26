module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Project configuration.
  grunt.initConfig({    
    pkg: grunt.file.readJSON('package.json'),
    meta: '/* <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n',
    copy: {
      main: {
        files: [{expand: true, cwd: 'src/', src: '*', dest: 'build/'}]
      }
    },
    uglify: {
      options: {
        banner: '<%= meta.banner %>'
      },
      build: {
        src: 'build/mk-editable-span.js',
        dest: 'build/mk-editable-span.min.js',
      }
    }
  });
  grunt.registerTask('default', ['copy', 'uglify']);
};