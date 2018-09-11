// import 'jquery';
import GeneralScripts from './_generalScripts';

const App = {

	/**
	 * App.init
	 */
	init() {
		// General scripts
		function initGeneralScripts() {
			return new GeneralScripts();
		}
		initGeneralScripts();
	}

};

document.addEventListener('DOMContentLoaded', () => {
	$(() => {
		App.init();
	});
});
