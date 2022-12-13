<?php

function _add_javascript() {
    // force all scripts to load in footer
    remove_action('wp_head', 'wp_print_scripts');
    remove_action('wp_head', 'wp_print_head_scripts', 9);
    remove_action('wp_head', 'wp_enqueue_scripts', 1);

	wp_enqueue_script('theme', get_template_directory_uri() . '/assets/dist/js/main.js', null, null, true );
}
add_action('wp_enqueue_scripts', '_add_javascript', 100);

function _add_stylesheets() {
    // removing all WP css files enqueued by default
    wp_dequeue_style('wp-block-library');
    wp_dequeue_style('wp-block-library-theme');
    wp_dequeue_style('wc-block-style');
    wp_dequeue_style('global-styles');
    wp_dequeue_style('classic-theme-styles');

	wp_enqueue_style('theme', get_template_directory_uri() . '/assets/dist/css/main.css', null, null, 'all' );
}
add_action('wp_enqueue_scripts', '_add_stylesheets');
