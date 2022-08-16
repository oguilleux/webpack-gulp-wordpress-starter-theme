import {deleteAsync} from 'del';

// config
import config from '../../config/fonts';

/**
 * Delete all font files
 * within the built theme's
 * asset directory
 *
 */
export default function (done) {
	deleteAsync(config.paths.clean)
		.then(function () { done(); })
};
