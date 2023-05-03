import gulp from 'gulp';
import log from 'fancy-log';
import c from 'ansi-colors';

// recipes
import browserSync from './gulp/core/recipes/browser-sync';
import fontsClean from './gulp/core/recipes/fonts/clean';
import fontsDev from './gulp/core/recipes/fonts/dev';
import fontsProd from './gulp/core/recipes/fonts/prod';
import fontsWatch from './gulp/core/recipes/fonts/watch';
import svgClean from './gulp/core/recipes/svg/clean';
import svgDev from './gulp/core/recipes/svg/dev';
import svgProd from './gulp/core/recipes/svg/prod';
import svgWatch from './gulp/core/recipes/svg/watch';
import spriteClean from './gulp/core/recipes/sprite/clean';
import spriteDev from './gulp/core/recipes/sprite/dev';
import spriteProd from './gulp/core/recipes/sprite/prod';
import spriteWatch from './gulp/core/recipes/sprite/watch';
import imagesClean from './gulp/core/recipes/images/clean';
import imagesDev from './gulp/core/recipes/images/dev';
import imagesProd from './gulp/core/recipes/images/prod';
import imagesWatch from './gulp/core/recipes/images/watch';
import scriptsClean from './gulp/core/recipes/scripts/clean';
import scriptsDev from './gulp/core/recipes/scripts/dev';
import scriptsProd from './gulp/core/recipes/scripts/prod';
import scriptsWatch from './gulp/core/recipes/scripts/watch';
import stylesClean from './gulp/core/recipes/styles/clean';
import stylesDev from './gulp/core/recipes/styles/dev';
import stylesProd from './gulp/core/recipes/styles/prod';
import stylesWatch from './gulp/core/recipes/styles/watch';

// gulpfile booting message
log(c.green('Starting Gulp! Please wait...'));

/**
 * Browser
 */
gulp.task('browser:sync', browserSync);

/**
 * Fonts
 */
gulp.task('fonts:clean', fontsClean);
gulp.task('fonts:dev', gulp.series('fonts:clean', fontsDev));
gulp.task('fonts:prod', gulp.series('fonts:clean', fontsProd));
gulp.task('fonts:watch', gulp.series('fonts:dev', fontsWatch));

/**
 * Svgs
 */
gulp.task('svg:clean', svgClean);
gulp.task('svg:dev', gulp.series('svg:clean', svgDev));
gulp.task('svg:prod', gulp.series('svg:clean', svgProd));
gulp.task('svg:watch', gulp.series('svg:dev', svgWatch));

/**
 * Svg Sprites
 */
gulp.task('sprite:clean', spriteClean);
gulp.task('sprite:dev', gulp.series('sprite:clean', spriteDev));
gulp.task('sprite:prod', gulp.series('sprite:clean', spriteProd));
gulp.task('sprite:watch', gulp.series('sprite:dev', spriteWatch));

/**
 * Images
 */
gulp.task('images:clean', imagesClean);
gulp.task('images:dev', gulp.series('images:clean', imagesDev));
gulp.task('images:prod', gulp.series('images:clean', imagesProd));
gulp.task('images:watch', gulp.series('images:dev', imagesWatch));

/**
 * Scripts
 */
gulp.task('scripts:clean', scriptsClean);
gulp.task('scripts:dev', gulp.series('scripts:clean', scriptsDev));
gulp.task('scripts:prod', gulp.series('scripts:clean', scriptsProd));
gulp.task('scripts:watch', gulp.series('scripts:dev', scriptsWatch));

/**
 * Styles
 */
gulp.task('styles:clean', stylesClean);
gulp.task('styles:dev', gulp.series('styles:clean', stylesDev));
gulp.task('styles:prod', gulp.series('styles:clean', stylesProd));
gulp.task('styles:watch', gulp.series('styles:dev', stylesWatch));

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
