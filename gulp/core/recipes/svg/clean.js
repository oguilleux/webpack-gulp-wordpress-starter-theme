// var fsExtra = require('fs-extra');
// var fs = require('fs');
import {deleteAsync} from 'del';
// var deleteAsync = require('del');

// config
import config from '../../config/svg';

/**
 * Delete all svgs
 * within the built theme's
 * asset directory
 *
 */
export default function (done) {
	deleteAsync(config.paths.clean)
		.then(function () { done(); })
};
