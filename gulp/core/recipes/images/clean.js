import {deleteAsync} from 'del';

// config
import config from '../../config/images';

/**
 * Delete all images
 * within the built theme's
 * asset directory
 *
 */
export default function (done) {
	deleteAsync(config.paths.clean)
		.then(function () { done(); })
};
