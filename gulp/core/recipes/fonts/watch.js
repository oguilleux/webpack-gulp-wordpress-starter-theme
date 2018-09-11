var gulp   = require('gulp');

// config
var config = require('../../config/fonts');


/**
 * Watch font files
 * for changes
 *
 * @param done
 */
module.exports = function (done) {

	gulp.watch(config.paths.watch, gulp.parallel('fonts:dev'));

	done();
};
