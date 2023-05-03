import browserSync from 'browser-sync';
import config from '../config/browser-sync';

/**
 * Spin up the browser-sync
 * socket server to listen for
 * and push code changes to the
 * browser
 *
 */
export default function startServer(done) {
    browserSync(config);
    done();
}
