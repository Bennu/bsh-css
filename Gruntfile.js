 module.exports = function (grunt) {
 	require('load-grunt-tasks')(grunt);

 	grunt.initConfig({
 		clean: ['dist/'],
 		open: {
 			server: {
 				path: 'http://localhost:<%= connect.options.port %>'
 			}
 		}
 	});

 	grunt.loadTasks('grunt');

 	grunt.registerTask('build:assets', ['clean', 'compass', 'cssmin']);
 	grunt.registerTask('build', ['build:assets']);
 	grunt.registerTask('default', ['build', 'connect', 'open', 'watch']);
 }
