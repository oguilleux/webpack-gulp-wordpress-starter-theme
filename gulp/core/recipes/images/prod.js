import gulp from 'gulp';
import plumber from 'gulp-plumber';
import squoosh from 'gulp-squoosh';
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
			"message": pumped("Images Compressed"),
			"onLast": true
		}));
};
