import gulp from 'gulp';
import config from '../../config/styles';

export default function (done) {
	gulp.watch(config.paths.watch, gulp.parallel('styles:dev'));
	done();
}
