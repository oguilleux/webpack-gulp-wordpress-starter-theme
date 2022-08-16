import gulp from 'gulp';

// config
import config from'../../config/sprite';

/**
 * Watch svg sprite files
 * for changes
 *
 * @param done
 */
export default function (done) {
	gulp.watch(config.paths.watch, gulp.parallel('sprite:dev'));
	done();
};
