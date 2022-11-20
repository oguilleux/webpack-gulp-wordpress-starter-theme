const { watch, parallel } = require('gulp');

// config
import config from '../../config/styles.js';
import stylesDev from '../../recipes/styles/dev.js';

/**
 * Watch style files
 * for changes
 *
 * @param done
 */
export default function stylesWatch(done) {
	watch(config.paths.watch, parallel(stylesDev));
	done();
};
