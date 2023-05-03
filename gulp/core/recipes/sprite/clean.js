import del from 'del';
import { paths } from '../../config/sprite';

/**
 * Delete all svg sprites
 * within the built theme's
 * asset directory
 *
 */
export default function (done) {
	del(paths.clean, { force: true }).then(() => {
		done();
	});
}
