import { deleteSync } from 'del';

// config
import config from '../../config/scripts';

/**
 * Delete all JS files
 * within the built theme's
 * asset directory
 *
 */
function cleanScripts(done) {
	deleteSync(config.paths.clean, { force: true })
		.then(function () { done(); });
}

exports.default = cleanScripts;
