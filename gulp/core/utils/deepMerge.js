import lodash from 'lodash';

/**
 * Simple lodash wrapper to
 * deep merge two objects
 *
 * @param a
 * @param b
 * @returns {*}
 */
export default function (a, b) {
	return lodash.mergeWith(a, b, deep);
};


/**
 * Utility for lodash.merge
 * to manage deeply merging
 * objects as well as the
 * arrays they contain
 *
 * @param a
 * @param b
 * @returns {Array.<T>|string}
 */
function deep(a, b) {
	if (lodash.isArray(a) && lodash.isArray(b)) {
		return a.concat(b);
	}
}
