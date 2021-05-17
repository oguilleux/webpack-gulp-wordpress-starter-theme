<?php

function _add_javascript() {
	wp_enqueue_script('theme-js', get_template_directory_uri() . '/assets/dist/js/main.js', array(), null, true );
}
add_action('wp_enqueue_scripts', '_add_javascript', 100);

function _add_stylesheets() {
	wp_enqueue_style('theme-css', get_template_directory_uri() . '/assets/dist/css/main.css', array(), null, 'all' );
}
add_action('wp_enqueue_scripts', '_add_stylesheets');

function add_browsersync_script() {
	if(wp_get_environment_type() !== 'development'){
		return;
	}
	?>
	<script id="__bs_script__">//<![CDATA[
		document.write("<script async src='http://HOST:3000/browser-sync/browser-sync-client.js?v=2.26.14'><\/script>".replace("HOST", location.hostname));
		//]]></script>
	<?php
}
add_action( 'wp_footer', 'add_browsersync_script' );