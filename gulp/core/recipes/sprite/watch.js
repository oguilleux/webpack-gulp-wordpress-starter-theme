import gulp from 'gulp';
import config from '../../config/sprite';

/**
 * Watch svg sprite files
 * for changes
 *
 * @param done
 */
export default function spriteWatch(done) {
	gulp.watch(config.paths.watch, gulp.parallel('sprite:dev'));
	done();
}
