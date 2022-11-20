import browserSync from 'browser-sync';

// config
import config from '../config/browser-sync.js';

/**
 * Spin up the browser-sync
 * socket server to listen for
 * and push code changes to the
 * browser
 *
 */



export default function browserSyncTasks(done) {
	browserSync(config);
	done();
};
