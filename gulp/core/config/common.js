// utils
var deepMerge = require('../utils/deepMerge');

/**
 * Common config
 * for all tasks
 *
 */
module.exports = deepMerge({
	paths: {
		assets: {
			src: 'assets/src',
			dest: 'assets/dist'
		}
	}
});