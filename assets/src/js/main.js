import General from './_generalScripts';

const App = {

	/**
	 * App.init
	 */
	init() {
		// General scripts
		function initGeneral() {
			return new General();
		}
		initGeneral();
	}

};

document.addEventListener('DOMContentLoaded', () => {
	App.init();
});
