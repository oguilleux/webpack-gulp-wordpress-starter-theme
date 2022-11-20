// utils
import deepMerge from '../utils/deepMerge.js';

/**
 * Common config
 * for all tasks
 *
 */
export default deepMerge({
	paths: {
		assets: {
			src: 'assets/src',
			dest: 'assets/dist'
		}
	}
});
