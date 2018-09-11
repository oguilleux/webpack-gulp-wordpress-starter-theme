var gulp   = require('gulp');

// config
var config = require('../../config/styles');


/**
 * Watch style files
 * for changes
 *
 * @param done
 */
module.exports = function (done) {

	gulp.watch(config.paths.watch, gulp.parallel('styles:dev'));

	done();
};
