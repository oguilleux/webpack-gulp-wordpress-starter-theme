// utils
import deepMerge from '../utils/deepMerge.js';

/**
 * BrowserSync
 * configuration
 * object
 *
 */
export default function config() {
	return deepMerge({
		logSnippet: false,
		ghostMode: false,
		open: false
	});
}
