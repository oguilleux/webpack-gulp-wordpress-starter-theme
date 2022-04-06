// utils
var deepMerge = require('../utils/deepMerge');

// config
var assets = require('./common').paths.assets;

/**
 * Svg Sprite Building
 * Configuration
 * Object
 *
 * @type {{}}
 */
module.exports = deepMerge({
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
