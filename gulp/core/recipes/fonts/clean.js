import { deleteSync } from 'del';

// config
import config from '../../config/fonts';

/**
 * Delete all font files
 * within the built theme's
 * asset directory
 *
 */
function cleanFonts(done) {
	deleteSync(config.paths.clean, { force: true })
		.then(function () { done(); });
}

exports.default = cleanFonts;
