import {deleteAsync} from 'del';

// config
import config from '../../config/styles';

/**
 * Delete all CSS and SourceMap
 * files within the built theme's
 * asset directory
 *
 */
export default function (done) {
	deleteAsync(config.paths.clean)
		.then(function () { done(); })
};
