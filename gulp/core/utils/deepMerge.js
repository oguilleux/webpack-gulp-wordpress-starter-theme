import lodash from 'lodash';


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

/**
 * Simple lodash wrapper to
 * deep merge two objects
 *
 * @param a
 * @param b
 * @returns {*}
 */
export default function deepMerge(a, b) {
	return lodash.mergeWith(a, b, deep);
};
