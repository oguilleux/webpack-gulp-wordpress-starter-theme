import log from 'fancy-log';
import path from 'path';
import c from 'ansi-colors';

/**
 * Validate the options passed
 * into the project's package.json
 *
 * @param project
 */
export default function validateProjectOptions(project) {
	let validationFailed = false;

	/**
	 * Safely handle missing
	 * project name or
	 * project prettyName
	 */
	if (!project.name) {
		validationFailed = true;

		log('Project Config Error:', c.red('The \"name\" option in your project.config.js configuration cannot be empty'));
	}
	if (!project.prettyName) {
		validationFailed = true;

		log('Project Config Error:', c.red('The \"prettyName\" option in your project.config.js configuration cannot be empty'));
	}

	/**
	 * Safely handle misconfigured
	 * project name
	 */
	const devThemeRoot = path.basename(path.resolve('./'));
	if (project.name === devThemeRoot) {
		validationFailed = true;

		log('Project Config Error:', c.red(
			`The \"name\" value in your project.config.js configuration '${project.name}' ` +
			`cannot be the same as the directory name of the development theme '${devThemeRoot}'.`
		));

		log(
			`Please either rename the development theme directory (to '${project.name}_dev' for example) ` +
			`or change the name value in your project.config.js to something else.`
		);
	}

	/**
	 * Exit the gulp process
	 * if validation failed
	 */
	if (validationFailed) {
		// if validation has failed
		// do not continue further
		process.exit(1);
	}
}
