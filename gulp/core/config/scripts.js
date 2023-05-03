import TerserPlugin from 'terser-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';

// utils
import deepMerge from '../utils/deepMerge';

// config
import { paths as assets } from './common';

/**
 * Script Building
 * Configuration
 * Object
 *
 * @type {{}}
 */
export default deepMerge({
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
				optimization: {
					minimize: true,
					minimizer: [
						new TerserPlugin({
							terserOptions: {
								output: {
									comments: false,
								},
							},
							extractComments: false,
						})
					]
				}
			},

			defaults: {
				resolve: {
					extensions: ['.js', '.jsx', '.ts', '.tsx']
				},
				output: {
					chunkFilename: 'chunk-[name].js'
				},
				stats: {
					colors: true
				},
				module: {
					rules: [
						{
							test: /\.m?js$/,
							exclude: /node_modules/,
							loader: 'babel-loader',
							options: {
								presets: ['@babel/preset-env'],
								plugins: ['@babel/plugin-transform-runtime']
							}
						},
						{
							test: /swiper\.esm\.js/, // force tree shaking for swiper js
							sideEffects: false
						}
					]
				},
				plugins: [
					new ESLintPlugin({
						failOnError: false
					})
				],
				externals: {
					jquery: 'jQuery'
				},
				performance: {
					hints: false,
					maxEntrypointSize: 512000,
					maxAssetSize: 512000
				}
			}
		}
	}
});
