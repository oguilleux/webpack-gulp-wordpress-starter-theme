// utils
import deepMerge from '../utils/deepMerge';

// config
import common from './common';
const assets = common.paths.assets;

/**
 * Svg Building
 * Configuration
 * Object
 *
 * @type {{}}
 */
export default deepMerge({
	paths: {
		watch: [
			assets.src + '/svg/**/*.svg',
			'!' + assets.src + '/svg/sprite/**/*.svg'
		],
		src: [
			assets.src + '/svg/**/*.svg',
			'!' + assets.src + '/svg/sprite/**/*.svg'
		],
		dest: assets.dest + '/svg',
		clean: [
			assets.dest + '/svg/**/*.svg',
			'!' + assets.dest + '/svg/sprite-*.svg'
		]
	},

	options: {
		svgmin: {multipass: true}
	}

});
