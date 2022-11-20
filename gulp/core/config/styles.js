// utils
import deepMerge from '../utils/deepMerge.js';

// config
import common from './common.js';

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
			common.paths.assets.src + '/scss/**/*.scss',
			'!' + common.paths.assets.src + '/scss/**/*_tmp\\d+.scss'
		],
		src:   [
			common.paths.assets.src + '/scss/*.scss',
			'!' + common.paths.assets.src + '/scss/**/_*'
		],
		dest:  common.paths.assets.dest + '/css',
		clean: common.paths.assets.dest + '/css/**/*.{css,map}'
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
})


