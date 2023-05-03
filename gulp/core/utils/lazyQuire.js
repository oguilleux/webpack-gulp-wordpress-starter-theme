/**
 * Return a function that lazily
 * imports a block only when
 * it is invoked and caches
 * it for future re-use
 *
 * @param module
 * @returns {Function}
 */
export default function (module) {
	let worker = '';

	return function (a, b, c, d, e, f, g) {
		if (!worker) {
			worker = module.default;
		}

		return worker(a, b, c, d, e, f, g);
	};
}
