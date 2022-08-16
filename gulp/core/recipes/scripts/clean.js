import {deleteAsync} from 'del';

// config
import config from '../../config/scripts';

/**
 * Delete all JS files
 * within the built theme's
 * asset directory
 *
 */
export default function (done) {
	deleteAsync(config.paths.clean)
		.then(function () { done(); })
};
