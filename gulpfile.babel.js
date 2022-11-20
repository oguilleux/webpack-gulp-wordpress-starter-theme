
const { series } = require('gulp');

const log = require('fancy-log');
import c from 'ansi-colors';

// utils
// const lazyQuire = require('./gulp/core/utils/lazyQuire');

// gulpfile booting message
log(c.green('Starting Gulp! Please wait...'));

/**
 * Browser
 */
// task('browser:sync', lazyQuire(require, './gulp/core/recipes/browser-sync'));
import browserSyncTasks from './gulp/core/recipes/browser-sync.js';
function initBrowSync(done) {
	browserSyncTasks()
	done();
}

/**
 * Fonts
 */
// // const fontsClean = require('./gulp/core/recipes/fonts/clean');
// task('fonts:clean', lazyQuire(require, './gulp/core/recipes/fonts/clean'));
// // const fontsDev = require('./gulp/core/recipes/fonts/dev');
// task('fonts:dev', series('fonts:clean', lazyQuire(require, './gulp/core/recipes/fonts/dev')));
// task('fonts:prod', series('fonts:clean', lazyQuire(require, './gulp/core/recipes/fonts/prod')));
// task('fonts:watch', series('fonts:dev', lazyQuire(require, './gulp/core/recipes/fonts/watch')));
//
//
// /**
//  * Svgs
//  */
// task('svg:clean', lazyQuire(require, './gulp/core/recipes/svg/clean'));
// task('svg:dev', series('svg:clean', lazyQuire(require, './gulp/core/recipes/svg/dev')));
// task('svg:prod', series('svg:clean', lazyQuire(require, './gulp/core/recipes/svg/prod')));
// task('svg:watch', series('svg:dev', lazyQuire(require, './gulp/core/recipes/svg/watch')));
//
//
// /**
//  * Svg Sprites
//  */
// task('sprite:clean', lazyQuire(require, './gulp/core/recipes/sprite/clean'));
// task('sprite:dev', series('sprite:clean', lazyQuire(require, './gulp/core/recipes/sprite/dev')));
// task('sprite:prod', series('sprite:clean', lazyQuire(require, './gulp/core/recipes/sprite/prod')));
// task('sprite:watch', series('sprite:dev', lazyQuire(require, './gulp/core/recipes/sprite/watch')));
//
//
// /**
//  * Images
//  */
// task('images:clean', lazyQuire(require, './gulp/core/recipes/images/clean'));
// task('images:dev', series('images:clean', lazyQuire(require, './gulp/core/recipes/images/dev')));
// task('images:prod', series('images:clean', lazyQuire(require, './gulp/core/recipes/images/prod')));
// task('images:watch', series('images:dev', lazyQuire(require, './gulp/core/recipes/images/watch')));
//
//
// /**
//  * Scripts
//  */
// task('scripts:clean', lazyQuire(require, './gulp/core/recipes/scripts/clean'));
// task('scripts:dev', series('scripts:clean', lazyQuire(require, './gulp/core/recipes/scripts/dev')));
// task('scripts:prod', series('scripts:clean', lazyQuire(require, './gulp/core/recipes/scripts/prod')));
// task('scripts:watch', series('scripts:dev', lazyQuire(require, './gulp/core/recipes/scripts/watch')));

/**
 * Styles
 */
import stylesClean from './gulp/core/recipes/styles/clean.js';
import stylesDev from './gulp/core/recipes/styles/dev.js';
import stylesProd from './gulp/core/recipes/styles/prod.js';
import stylesWatch from './gulp/core/recipes/styles/watch.js';

/**
 * Grouped
 */
// exports.default = parallel('fonts:watch', 'svg:watch', 'sprite:watch', 'scripts:watch', series(stylesClean, stylesDev, stylesWatch));
exports.default = series(stylesClean, stylesDev, stylesWatch);
exports.build = series(stylesClean, stylesProd);
// exports.build = parallel('fonts:prod', 'svg:prod', 'sprite:prod', 'scripts:prod', series(stylesClean, stylesProd));
