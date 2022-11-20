import { deleteSync } from 'del';

// config
import config from '../../config/svg';

/**
 * Delete all svgs
 * within the built theme's
 * asset directory
 *
 */
function cleanSvg(done) {
	deleteSync(config.paths.clean, { force: true })
		.then(function () { done(); });
}

exports.default = cleanSvg;
