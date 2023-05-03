import gulp from 'gulp';
import plumber from 'gulp-plumber';
import named from 'vinyl-named';
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
import browserSync from 'browser-sync';

import deepMerge from '../../utils/deepMerge';
import logStats from '../../utils/webpackLogStats';
import notifaker from '../../utils/notifaker';
import pumped from '../../utils/pumped';

import { paths, options } from '../../config/scripts';

/**
 * Watch for changes
 * to JS assets and
 * update the JS packages
 * with webpack
 *
 * @returns {*}
 */
export default function (done) {
	gulp.src(paths.src)
		.pipe(plumber())
		.pipe(named())
		.pipe(gulpWebpack(deepMerge(options.webpack.defaults, options.webpack.watch), webpack, function (err, stats) {
			logStats(err, stats, { watch: true });
			browserSync.reload();
			notifaker(pumped('JS Packaged'));
		}))
		.pipe(gulp.dest(paths.dest));

	done();
}
