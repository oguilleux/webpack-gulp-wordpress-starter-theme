const fs = require('fs').promises;
const path = require('path');

/**
 * Return an array of direct
 * subdirectories for a given
 * directory
 *
 * @param {string} dir - The directory to get subdirectories from
 * @returns {Array<string>} - An array of subdirectories
 */
module.exports = async function getFolders(dir = './') {
	try {
		const files = await fs.readdir(dir);
		const folders = [];

		for (const file of files) {
			const stats = await fs.stat(path.join(dir, file));

			if (stats.isDirectory()) {
				folders.push(file);
			}
		}

		return folders;
	} catch (error) {
		if (error.code === 'ENOENT') {
			// no dir found, that's ok just
			// return empty array
			return [];
		}

		throw error;
	}
};
