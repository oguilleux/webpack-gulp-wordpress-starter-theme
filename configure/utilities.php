<?php

if ( ! function_exists( 'get_partial' ) ) :

	/**
	 * Load given template with arguments as array.
	 * arguments.
	 * @see     get_template_part().
	 * @see     http://wordpress.stackexchange.com/a/103257
	 * @author  Julien Vasseur julien@poigneedemainvirile.com
	 */
	function get_partial( $slug = null, $name = null, array $params = array(), $prefix = null ) {
		global $posts, $post, $wp_did_header, $wp_query, $wp_rewrite, $wpdb, $wp_version, $wp, $id, $comment, $user_ID;

		/**
		 * Fires before the specified template part file is loaded.
		 *
		 * The dynamic portion of the hook name, `$slug`, refers to the slug name
		 * for the generic template part.
		 *
		 * @param string $slug The slug name for the generic template.
		 * @param string $name The name of the specialized template.
		 */
		do_action( "get_partial_{$slug}", $slug, $name );
		do_action( "get_template_part_{$slug}", $slug, $name );

		$templates = array();
		$name = (string) $name;
		if ( '' !== $name ) {
			$templates[] = "{$slug}-{$name}.php";
		}

		$templates[] = "{$slug}.php";

		$_template_file = locate_template( $templates, false, false );

		if ( is_array( $wp_query->query_vars ) ) {
			extract( $wp_query->query_vars, EXTR_SKIP );
		}

		if ( isset( $s ) ) {
			$s = esc_attr( $s );
		}

		if ( ! is_null( $prefix ) ) {
			$flags = EXTR_PREFIX_ALL;
			// ensure prefix doesn't end with an underscore, it is automatically added by extract()
			if ( '_' === $prefix[ strlen( $prefix ) - 1 ] ) {
				$prefix = substr( $prefix, 0, -1 );
			}
		} else {
			$flags = EXTR_PREFIX_SAME;
			$prefix = '';
		}

		extract( $params, $flags, $prefix );

		require( $_template_file );
	}

endif;
