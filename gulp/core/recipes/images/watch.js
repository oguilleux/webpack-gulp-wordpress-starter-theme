var gulp   = require('gulp');

// config
var config = require('../../config/images');


/**
 * Watch image files
 * for changes
 *
 * @param done
 */
module.exports = function (done) {

	gulp.watch(config.paths.watch, gulp.parallel('images:dev'));

	done();
};
