import gulp from 'gulp';
import config from '../../config/svg';

/**
 * Watch svg files
 * for changes
 *
 * @param done
 */
export default function watchSvg(done) {
	gulp.watch(config.paths.watch, gulp.parallel('svg:dev'));
	done();
};
