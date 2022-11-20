import { deleteSync } from 'del';

// config
import config from '../../config/styles.js';

/**
 * Delete all CSS and SourceMap
 * files within the built theme's
 * asset directory
 *
 */


export default function stylesClean(done) {
	deleteSync(config.paths.clean, { force: true })
		.then(function () { done(); });
};
