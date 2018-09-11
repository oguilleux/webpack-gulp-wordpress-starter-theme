var gulp   = require('gulp');

// config
var config = require('../../config/svg');


/**
 * Watch svg files
 * for changes
 *
 * @param done
 */
module.exports = function (done) {

	gulp.watch(config.paths.watch, gulp.parallel('svg:dev'));

	done();
};
