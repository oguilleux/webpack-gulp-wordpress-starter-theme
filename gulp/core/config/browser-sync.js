// utils
var deepMerge = require('../utils/deepMerge');

/**
 * BrowserSync
 * configuration
 * object
 *
 */
module.exports = deepMerge({
		logSnippet: false,
		ghostMode: false,
		open: false
});
