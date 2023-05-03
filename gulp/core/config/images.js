// utils
import deepMerge from '../utils/deepMerge';

// config
import { paths as assets } from './common';

/**
 * Image Building
 * Configuration
 * Object
 *
 * @type {{}}
 */
export default deepMerge({
	paths: {
		watch: [
			assets.src + '/img/**/*.{gif,ico,jpg,jpeg,png,webp}',
			'!' + assets.src + '/img/sprites'
		],
		src:   [
			assets.src + '/img/**/*.{gif,ico,jpg,jpeg,png,webp}',
			'!' + assets.src + '/img/sprites'
		],
		dest:  assets.dest + '/img',
		clean: assets.dest + '/img/**/*.{gif,ico,jpg,jpeg,png,webp}'
	}
});
