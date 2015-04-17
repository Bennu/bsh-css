module.exports = function (grunt) {

	grunt.config('cssmin', {
		dist: {
			files: {
				'dist/assets/css/application.min.css': ['dist/assets/css/application.css']
			}
		}
	});
};