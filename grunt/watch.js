module.exports = function (grunt) {

	grunt.config('watch', {
		sass: {
			files: ['src/scss/**/*.scss'],
			tasks: ['build:assets'],
			options: {
				livereload: true
			}
		}
	});
};