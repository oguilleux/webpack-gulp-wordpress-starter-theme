import del from 'del';

// config
import { paths } from '../../config/svg';


/**
 * Delete all svgs
 * within the built theme's
 * asset directory
 *
 */
export default function (done) {
	del(paths.clean, { force: true })
		.then(() => done());
};
