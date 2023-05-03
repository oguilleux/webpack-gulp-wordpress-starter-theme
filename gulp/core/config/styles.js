// utils
import deepMerge from '../utils/deepMerge';

// config
import { paths as assets } from './common';

/**
 * Style Building
 * Configuration
 * Object
 *
 * @type {{}}
 */
export default deepMerge({
	paths: {
		watch: [
			assets.src + '/scss/**/*.scss',
			'!' + assets.src + '/scss/**/*_tmp\\d+.scss'
		],
		src:   [
			assets.src + '/scss/*.scss',
			'!' + assets.src + '/scss/**/_*'
		],
		dest:  assets.dest + '/css',
		clean: assets.dest + '/css/**/*.{css,map}'
	},

	options: {
		sass: {},
		autoprefixer: {
			overrideBrowserslist: [
				'last 2 version',
				'ie >= 11',
				'IOS >= 7'
			]
		},
		minify: {
			preset: [
				'default',
				{
					discardComments: { removeAll: true }
				}
			]
		}
	}
});
