import { deleteSync } from 'del';

// config
import config from '../../config/images';

/**
 * Delete all images
 * within the built theme's
 * asset directory
 *
 */
function cleanImages(done) {
	deleteSync(config.paths.clean, { force: true })
		.then(function () { done(); });
}

exports.default = cleanImages;
