import del from 'del';

// config
import config from '../../config/scripts';

/**
 * Delete all JS files
 * within the built theme's
 * asset directory
 *
 */
export default function (done) {
	del(config.paths.clean, { force: true })
		.then(function () { done(); });
};
