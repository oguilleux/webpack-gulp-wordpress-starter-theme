import gulp from 'gulp';
import plumber from 'gulp-plumber';
import named from 'vinyl-named';
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
import browserSync from 'browser-sync';

// utils
import deepMerge from '../../utils/deepMerge';
import logStats from '../../utils/webpackLogStats';
import notifaker from '../../utils/notifaker';
import pumped from '../../utils/pumped';

// config
import config from '../../config/scripts';

/**
 * Watch for changes
 * to JS assets and
 * update the JS packages
 * with webpack
 *
 * @returns {*}
 */
export default function (done) {
	gulp.src(config.paths.src)
		.pipe(plumber())

		.pipe(named()) // vinyl-named is used to allow for
									 // multiple entry files
		.pipe(gulpWebpack(
			deepMerge(
				config.options.webpack.defaults,
				config.options.webpack.watch
			), webpack, function (err, stats) {
				logStats(err, stats, { watch: true });

				// reload browser-sync when
				// a package is updated
				browserSync.reload();
				notifaker(pumped('JS Packaged'));
   	 		})
		)
		.pipe(gulp.dest(config.paths.dest));

	done();
};
