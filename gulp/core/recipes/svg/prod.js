import gulp from 'gulp';
import plumber from 'gulp-plumber';
import svgmin from 'gulp-svgmin';
import notify from 'gulp-notify';

// utils
import pumped from '../../utils/pumped';

// config
import config from '../../config/svg';

/**
 * Compress Svgs and
 * move them to the
 * built theme
 *
 */
export default function () {
	return gulp.src(config.paths.src)
		.pipe(plumber())

		.pipe(svgmin(config.options.svgmin))

		.pipe(gulp.dest(config.paths.dest))
		.pipe(notify({
			"message": pumped("Svgs Compressed"),
			"onLast": true
		}));
};
