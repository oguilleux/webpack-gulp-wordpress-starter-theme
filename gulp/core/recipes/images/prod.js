var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var squoosh 	 = require('gulp-squoosh');
var notify       = require('gulp-notify');
var path 		 = require('path');

// utils
var pumped       = require('../../utils/pumped');

// config
var config       = require('../../config/images');


/**
 * Compress Images and
 * move them to the
 * built theme
 *
 */
module.exports = function () {
	return gulp.src(config.paths.src)
		.pipe(plumber())

		.pipe(
			squoosh(({ width, height, size, filePath }) => ({
				encodeOptions: {
					...(path.extname(filePath) === ".png"
						? { oxipng: {} }
						: { mozjpeg: {} }),
				},
			}))
		)

		.pipe(gulp.dest(config.paths.dest))
		.pipe(notify({
			message: pumped('Images Compressed'),
			onLast: true
		}));
};