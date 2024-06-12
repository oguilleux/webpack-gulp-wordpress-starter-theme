# WordPress Gulp and Webpack starter theme

![](screenshot.png)

## Under the hood

- [ES6](https://github.com/lukehoban/es6features#readme) for JavaScript (transpiling with [Babel](https://babeljs.io/) and linting with [ESLint](https://eslint.org/))
- [SASS](http://sass-lang.com/) preprocessor for CSS following [SASS Guidelines](https://sass-guidelin.es/#the-7-1-pattern)
- [Bootstrap 5](https://getbootstrap.com/docs/5.2/getting-started/introduction/) as CSS framework ([customizable with SASS](https://getbootstrap.com/docs/5.2/customize/sass/))
- [Gulp 5](https://gulpjs.com/) & [Webpack 5](https://webpack.js.org/) to manage, compile and optimize theme assets
- SVG Sprite : add your svgs in `assets/src/svg/sprite` and run your watch or build

## Requirements

* [Node](https://nodejs.org/)
* [Gulp](https://gulpjs.com/docs/en/getting-started/quick-start)

## Usage

First, clone this repository in your WordPress themes directory.

Then, run the following commands in the theme's directory :

	npm install

Launch your watch for assets with :

	npm run start

For production sites, create your build with :

	npm run build
