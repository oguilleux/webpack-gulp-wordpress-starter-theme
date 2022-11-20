import gulp from 'gulp';
import filter from 'gulp-filter';
import plumber from 'gulp-plumber';
import sourcemaps from 'gulp-sourcemaps';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import notify from 'gulp-notify';
import browserSync from 'browser-sync';
import autoprefixer from 'autoprefixer';
import postcss from 'gulp-postcss';

// config
import config from '../../config/styles.js';
console.log(config);
// utils
import pumped from '../../utils/pumped.js';

// postcss
const plugins = [
	autoprefixer(config.options.autoprefixer)
];

const sass = gulpSass(dartSass);

/**
 * Compile SCSS to CSS,
 * create Sourcemaps
 * and trigger
 * Browser-sync
 *
 *
 */
export default function stylesDev(cb) {
	const filterCSS = filter('**/*.css', { restore: true });

	return gulp.src(config.paths.src)
		.pipe(plumber())

		.pipe(sourcemaps.init())
		.pipe(sass.sync(config.options.sass))
		.on('error', function(error) {
			notify().write(error);
			this.emit('end');
		})
		.pipe(postcss(plugins))
		.pipe(sourcemaps.write('./'))

		.pipe(gulp.dest(config.paths.dest))

		.pipe(filterCSS) // sourcemaps adds `.map` files to the gulp
						 // stream, but we only want to trigger
						 // Browser-sync on CSS files so we need to
						 // filter the stream for the css files
		.pipe(browserSync.reload({ stream: true }))
		.pipe(filterCSS.restore)

		.pipe(notify({
			"message": pumped("Your SCSS is Compiled."),
			"onLast": true
		}));
};
