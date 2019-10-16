var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var sass         = require('gulp-sass');
var autoprefixer = require('autoprefixer');
var cssnano      = require('cssnano');
var postcss      = require('gulp-postcss');
var notify       = require('gulp-notify');

// utils
var pumped       = require('../../utils/pumped');

// config
var config       = require('../../config/styles');

var plugins = [
	autoprefixer(config.options.autoprefixer),
	cssnano(config.options.minify)
];

/**
 * Compile SCSS to CSS
 * and Minify
 *
 */
module.exports = function () {
	return gulp.src(config.paths.src)
		.pipe(plumber())

		.pipe(sass.sync(config.options.sass).on('error', sass.logError))

		.pipe(postcss(plugins))

		.pipe(gulp.dest(config.paths.dest))
		.pipe(notify({
			message: pumped('SCSS Compiled & Minified.'),
			onLast: true
		}));
};
