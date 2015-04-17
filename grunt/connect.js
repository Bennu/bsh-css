var LIVERELOAD_PORT = 35729;
var SERVER_PORT = 9000;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect) {
    return connect.static(require('path').resolve('.'));
};
module.exports = function (grunt) {

	grunt.config('connect', {
		options: {
			port: SERVER_PORT,
			hostname: '0.0.0.0'
		},
		livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect),
                        ];
                    }
                }
            }
	});
};