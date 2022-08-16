import gulp from 'gulp';

// config
import config from '../../config/images';

/**
 * Watch image files
 * for changes
 *
 * @param done
 */
export default function (done) {
	gulp.watch(config.paths.watch, gulp.parallel('images:dev'));
	done();
};
