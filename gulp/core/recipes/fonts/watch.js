import gulp from 'gulp';

// config
import config from '../../config/fonts';

/**
 * Watch font files
 * for changes
 *
 * @param done
 */
export default function (done) {

	gulp.watch(config.paths.watch, gulp.parallel('fonts:dev'));

	done();
};
