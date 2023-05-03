import del from 'del';

// config
import { paths } from '../../config/styles';

/**
 * Delete all CSS and SourceMap
 * files within the built theme's
 * asset directory
 *
 */
export default function (done) {
	del(paths.clean, { force: true })
		.then(() => done());
}
