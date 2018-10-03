# WordPress Gulp and Webpack blank theme

## Under the hood

- [ES6](https://babeljs.io/learn-es2015/) for JavaScript
- [SASS](http://sass-lang.com/) preprocessor for CSS
- [Breakpoint slicer](https://github.com/lolmaus/breakpoint-slicer/) for faster media queries
- [Bootstrap 4](https://getbootstrap.com/docs/4.0/getting-started/introduction/) as CSS framework
- [Gulp](https://gulpjs.com/) & [Webpack](https://webpack.js.org/) for managing, compiling and optimizing theme's asset files

## Requirements

* Node
* Gulp

## Usage

First, clone this repository in your WordPress theme directory.

On your local machine, run the following commands IN THE THEME :

	npm install

Launch your watch for assets with :

	npm run start
	
For production site create your build with :

	npm run prod
