import gulp from 'gulp';

// config
var config = require('../../config/styles');


/**
 * Watch style files
 * for changes
 *
 * @param done
 */
export default function (done) {

	gulp.watch(config.paths.watch, gulp.parallel('styles:dev'));

	done();
};
