import gulp from 'gulp';

// config
import config from '../../config/svg';

/**
 * Watch svg files
 * for changes
 *
 * @param done
 */
export default function (done) {
	gulp.watch(config.paths.watch, gulp.parallel('svg:dev'));
	done();
};
