import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import browserSync from 'browser-sync';

// utils
import pumped from '../../utils/pumped';

// config
import config from '../../config/fonts';

/**
 * Move Fonts to
 * the built theme
 *
 */
export default function () {
	return gulp.src(config.paths.src)
		.pipe(plumber())

		.pipe(gulp.dest(config.paths.dest))
		.pipe(notify({
			"message": pumped("Fonts Moved"),
			"onLast": true
		}))

		.on('end', browserSync.reload);
};
