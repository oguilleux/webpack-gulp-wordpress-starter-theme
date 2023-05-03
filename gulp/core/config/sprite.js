// utils
import deepMerge from '../utils/deepMerge';

// config
import { paths as assets } from './common';

/**
 * Svg Sprite Building
 * Configuration
 * Object
 *
 * @type {{}}
 */
export default deepMerge({
	paths: {
		watch: assets.src + '/svg/sprite/**/*.svg',
		src:   assets.src + '/svg/sprite',
		dest:  assets.dest + '/svg',
		clean: assets.dest + '/svg/sprite-*.svg'
	},

	options: {
		svgmin: {
			multipass: true,
			full: true,
			plugins: [
				{
					name: 'cleanupIDs',
					active: false
				},
				{
					name: 'removeXMLProcInst',
				},
				{
					name: 'removeXMLNS',
				},
				{
					name: 'inlineStyles',
					param: {
						onlyMatchedOnce: true
					}
				},
				{
					name: 'removeAttrs',
					params: {
						attrs: 'fill'
					}
				}
			]
		},
		svgSprite: function (name) {
			return {
				mode: {
					inline: true,
					symbol: {
						dest: '.',
						sprite: 'sprite-' + name + '.svg'
					}
				},
				shape: {
					id: {
						generator: 'icon-%s'
					}
				}
			};
		}
	}

});
