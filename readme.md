# WordPress Gulp and Webpack starter theme

## Under the hood

- [ES6](https://github.com/lukehoban/es6features#readme) for JavaScript (transpiling with [Babel](https://babeljs.io/) and linting with [ESLint](https://eslint.org/))
- [SASS](http://sass-lang.com/) preprocessor for CSS with [SASS Guidelines](https://sass-guidelin.es/#the-7-1-pattern)
- [Breakpoint slicer](https://github.com/lolmaus/breakpoint-slicer/) to write faster media queries
- [Bootstrap 4](https://getbootstrap.com/docs/4.3/getting-started/introduction/) as CSS framework ([customizable with SASS](https://getbootstrap.com/docs/4.3/getting-started/theming/#variable-defaults))
- [Gulp 4](https://gulpjs.com/) & [Webpack 4](https://webpack.js.org/) to manage, compile and optimize the theme's asset

## Requirements

* Node
* Gulp

## Usage

First, clone this repository in your WordPress themes directory.

Then, run the following commands in the theme's directory :

	npm install

Launch your watch for assets with :

	npm run start
	
For production sites, create your build with :

	npm run build
