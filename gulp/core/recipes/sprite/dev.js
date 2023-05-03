import gulp from 'gulp';
import plumber from 'gulp-plumber';
import svgSprite from 'gulp-svg-sprite';
import svgmin from 'gulp-svgmin';
import log from 'fancy-log';
import path from 'path';
import mergeStream from 'merge-stream';
import notify from 'gulp-notify';
import browserSync from 'browser-sync';

// utils
import getFolders from '../../utils/getFolders';
import pumped from '../../utils/pumped';

// config
import config from '../../config/sprite';


/**
 * Create single svg sprite given
 * a name and a src pattern
 *
 * @param name
 * @param src
 * @returns {*}
 */
function spriteTask(name, src) {
	return gulp.src(src)
		.pipe(plumber())

		.pipe(svgSprite(config.options.svgSprite(name)))

		.on('error', function(error) {
			notify({
				"message": "Error on Sprite creation"
			});
			log.error(error);
		})

		.pipe(svgmin(config.options.svgmin))

		.pipe(gulp.dest(config.paths.dest));
}


/**
 * Create Sprite from individual
 * svg files to be <use>d in
 * templates
 *
 */
export default function () {
	const subDirs = getFolders(config.paths.src).map(folder =>
		spriteTask(folder, path.join(config.paths.src, folder, '/**/*.svg')));

	const root = spriteTask('default', path.join(config.paths.src, '/*.svg'));

	return mergeStream(subDirs, root)
		.pipe(notify({
			"message": pumped("Svg Sprites Generated"),
			"onLast": true
		}))

		.on('end', browserSync.reload);
};
