// utils
import deepMerge from '../utils/deepMerge';

// config
import assets from './common';

/**
 * Font Building
 * Configuration
 * Object
 *
 * @type {{}}
 */
export default deepMerge({
	paths: {
		watch: assets.src  + '/fonts/**/*.{eot,otf,ttf,woff,woff2,svg}',
		src:   assets.src  + '/fonts/**/*.{eot,otf,ttf,woff,woff2,svg}',
		dest:  assets.dest + '/fonts',
		clean: assets.dest + '/fonts/**/*.{eot,otf,ttf,woff,woff2,svg}'
	}
});
