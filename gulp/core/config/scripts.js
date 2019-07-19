var path = require('path');
var webpack = require('webpack-stream').webpack;

// utils
var deepMerge = require('../utils/deepMerge');

// config
var assets = require('./common').paths.assets;

/**
 * Script Building
 * Configuration
 * Object
 *
 * @type {{}}
 */
module.exports = deepMerge({
    paths: {
        watch: assets.src + '/js/**/*.js',
        src: [
            assets.src + '/js/*.js',
            '!' + assets.src + '/js/**/_*'
        ],
        dest: assets.dest + '/js',
        clean: assets.dest + '/js/**/*.{js,map}'
    },

    options: {
        webpack: {

            // merged with defaults
            // for :watch task
            watch: {
            	mode: 'development',
                cache: true,
                watch: true,
                devtool: 'eval'
            },


            // merged with defaults
            // for :dev task
            dev: {
	            mode: 'development',
	            devtool: 'eval'
            },


            // merged with defaults
            // for :prod task
            prod: {
	            mode: 'production',
	            plugins: [
                    new webpack.optimize.OccurrenceOrderPlugin(true),
                ]
            },

            defaults: {
                resolve: {
                    extensions: ['.js', '.jsx']
                },
                output: {
                    chunkFilename: 'chunk-[name].js'
                },
                stats: {
                    colors: true
                },
                plugins: [
	                new webpack.LoaderOptionsPlugin({
		                test: /\.jsx?$/,
		                exclude: [
			                /node_modules/,
			                /bower_components/,
			                /polyfills/
		                ],
		                loader: ['eslint', 'babel'],
		                query: {
			                presets: ['env'],
			                plugins: ['transform-runtime']
		                }
					}),
                    new webpack.ProvidePlugin({
                        $: 'jquery',
                        jQuery: 'jquery',
                        'window.jQuery': 'jquery'
                    })
                ]
            }
        }
    }
});
