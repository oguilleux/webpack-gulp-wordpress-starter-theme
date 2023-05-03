import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sharpOptimizeImages from "gulp-sharp-optimize-images";
import notify from 'gulp-notify';
import path from 'path';

// utils
import pumped from '../../utils/pumped';

// config
import config from '../../config/images';

/**
 * Compress Images and
 * move them to the
 * built theme
 *
 */
export default function () {
	return gulp.src(config.paths.src)
		.pipe(plumber())

		.pipe(
			sharpOptimizeImages({
				webp: {
					quality: 80,
					lossless: false,
				},
				avif: {
					quality: 100,
					lossless: true,
					effort: 4,
				},
				jpg_to_heif: {
					quality: 90,
				},
				png_to_avif: {},

				jpg_to_jpg: {
					quality: 80,
					mozjpeg: true,
				},
			})
		)

		.pipe(gulp.dest(config.paths.dest))
		.pipe(notify({
			"message": pumped("Images Compressed"),
			"onLast": true
		}));
};
