module.exports = function (grunt) {

	grunt.config('compass', {
		dist: {
			options: {
				sassDir: ['src/scss'],
				cssDir: 'dist/assets/css',
				bundleExec: true,
				noLineComments: true
			}
		}
	});
};