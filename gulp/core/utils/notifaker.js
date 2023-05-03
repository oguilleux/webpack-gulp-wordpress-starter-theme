import notifier from 'node-notifier';
import log from 'fancy-log';
import c from 'ansi-colors';

/**
 * Fake the gulp-notfy functionality
 * to provide a consistent interface
 * for non-stream notifications
 *
 * @param message
 */
export default function (message) {

	log(
		c.cyan('gulp-notifier'),
		'[' + c.blue('Gulp notification') + ']',
		c.green(message)
	);

	notifier.notify({
		"title": "Gulp notification",
		"message": message,
		"onLast": true
	});
};
