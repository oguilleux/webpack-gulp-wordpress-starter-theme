import gulp from 'gulp';
import log from 'fancy-log';
import c from 'ansi-colors';

// utils
import lazyQuire from './gulp/core/utils/lazyQuire';

// gulpfile booting message
log(c.green('Starting Gulp! Please wait...'));


/**
 * Browser
 */
gulp.task('browser:sync', lazyQuire(import('./gulp/core/recipes/browser-sync')));

/**
 * Fonts
 */
const fonts = {
	clean: lazyQuire(import('./gulp/core/recipes/fonts/clean')),
	dev: lazyQuire(import('./gulp/core/recipes/fonts/dev')),
	prod: lazyQuire(import('./gulp/core/recipes/fonts/prod')),
	watch: lazyQuire(import('./gulp/core/recipes/fonts/watch'))
};

gulp.task('fonts:clean', fonts.clean);
gulp.task('fonts:dev', gulp.series('fonts:clean', fonts.dev));
gulp.task('fonts:prod', gulp.series('fonts:clean', fonts.prod));
gulp.task('fonts:watch', gulp.series('fonts:dev', fonts.watch));

/**
 * Svgs
 */
const svg = {
	clean: lazyQuire(import('./gulp/core/recipes/svg/clean')),
	dev: lazyQuire(import('./gulp/core/recipes/svg/dev')),
	prod: lazyQuire(import('./gulp/core/recipes/svg/prod')),
	watch: lazyQuire(import('./gulp/core/recipes/svg/watch'))
};

gulp.task('svg:clean', svg.clean);
gulp.task('svg:dev', gulp.series('svg:clean', svg.dev));
gulp.task('svg:prod', gulp.series('svg:clean', svg.prod));
gulp.task('svg:watch', gulp.series('svg:dev', svg.watch));

/**
 * Svg Sprites
 */
const sprite = {
	clean: lazyQuire(import('./gulp/core/recipes/sprite/clean')),
	dev: lazyQuire(import('./gulp/core/recipes/sprite/dev')),
	prod: lazyQuire(import('./gulp/core/recipes/sprite/prod')),
	watch: lazyQuire(import('./gulp/core/recipes/sprite/watch'))
};

gulp.task('sprite:clean', sprite.clean);
gulp.task('sprite:dev', gulp.series('sprite:clean', sprite.dev));
gulp.task('sprite:prod', gulp.series('sprite:clean', sprite.prod));
gulp.task('sprite:watch', gulp.series('sprite:dev', sprite.watch));

/**
 * Images
 */
const images = {
	clean: lazyQuire(import('./gulp/core/recipes/images/clean')),
	dev: lazyQuire(import('./gulp/core/recipes/images/dev')),
	prod: lazyQuire(import('./gulp/core/recipes/images/prod')),
	watch: lazyQuire(import('./gulp/core/recipes/images/watch'))
};

gulp.task('images:clean', images.clean);
gulp.task('images:dev', gulp.series('images:clean', images.dev));
gulp.task('images:prod', gulp.series('images:clean', images.prod));
gulp.task('images:watch', gulp.series('images:dev', images.watch));

/**
 * Scripts
 */
const scripts = {
	clean: lazyQuire(import('./gulp/core/recipes/scripts/clean')),
	dev: lazyQuire(import('./gulp/core/recipes/scripts/dev')),
	prod: lazyQuire(import('./gulp/core/recipes/scripts/prod')),
	watch: lazyQuire(import('./gulp/core/recipes/scripts/watch'))
};
gulp.task('scripts:clean', scripts.clean);
gulp.task('scripts:dev', gulp.series('scripts:clean', scripts.dev));
gulp.task('scripts:prod', gulp.series('scripts:clean', scripts.prod));
gulp.task('scripts:watch', gulp.series('scripts:dev', scripts.watch));

const styles = {
	clean: lazyQuire(import('./gulp/core/recipes/styles/clean')),
	dev: lazyQuire(import('./gulp/core/recipes/styles/dev')),
	prod: lazyQuire(import('./gulp/core/recipes/styles/prod')),
	watch: lazyQuire(import('./gulp/core/recipes/styles/watch'))
};

gulp.task('styles:clean', styles.clean);
gulp.task('styles:dev', gulp.series('styles:clean', styles.dev));
gulp.task('styles:prod', gulp.series('styles:clean', styles.prod));
gulp.task('styles:watch', gulp.series('styles:dev', styles.watch));

/**
 * Grouped
 */
gulp.task('default', gulp.parallel(
	'fonts:watch',
	'svg:watch',
	'sprite:watch',
	'images:watch',
	'scripts:watch',
	'styles:watch'
	//'browser:sync',
));

gulp.task('build', gulp.parallel(
	'fonts:prod',
	'svg:prod',
	'sprite:prod',
	'images:prod',
	'scripts:prod',
	'styles:prod'
));
