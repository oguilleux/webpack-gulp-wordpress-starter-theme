import { deleteSync } from 'del';

// config
var config = require('../../config/sprite');

/**
 * Delete all svg sprites
 * within the built theme's
 * asset directory
 *
 */
function cleanSprite(done) {
	deleteSync(config.paths.clean, { force: true })
		.then(function () { done(); });
}

exports.default = cleanSprite;
