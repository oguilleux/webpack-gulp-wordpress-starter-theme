import del from 'del';

// config
import config from '../../config/images';

/**
 * Delete all images
 * within the built theme's
 * asset directory
 *
 */
export default function (done) {
	del(config.paths.clean, { force: true })
		.then(function () { done(); });
};
