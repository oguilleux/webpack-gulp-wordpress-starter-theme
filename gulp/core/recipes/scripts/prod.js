import gulp from 'gulp';
import plumber from 'gulp-plumber';
import named from 'vinyl-named';
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
import notify from 'gulp-notify';

// utils
import deepMerge from '../../utils/deepMerge';
import pumped from '../../utils/pumped';

// config
import config from '../../config/scripts';

/**
 * Create minified JS
 * packages with webpack
 *
 * @returns {*}
 */
export default function () {
	return gulp.src(config.paths.src)
		.pipe(plumber())

		.pipe(named()) // vinyl-named is used to allow for
		// multiple entry files
		.pipe(gulpWebpack(
			deepMerge(
				config.options.webpack.defaults,
				config.options.webpack.prod
			), webpack
		))

		.pipe(gulp.dest(config.paths.dest))
		.pipe(notify({
			"message": pumped("JS Packaged & Minified!"),
			"onLast": true
		}));
};
