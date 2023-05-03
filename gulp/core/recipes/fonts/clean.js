import del from 'del';

// config
import config from '../../config/fonts';

/**
 * Delete all font files
 * within the built theme's
 * asset directory
 *
 */
export default function (done) {
	del(config.paths.clean, { force: true })
		.then(() => { done(); });
};
