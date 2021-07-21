<?php
/**
 * Plugin Name: Carol's Custom Block
 * Plugin URI: https://github.com/carolahn/wp-custom-block
 * Description: A learning plugin for gutenberg blocks,
 * Author: Carolina Ahn
 * Author URI: https://github.com/carolahn
 * Version: 1.0.0
 * Text-Domain: wp-custom-block
 */

// No direct access allowed
if (!defined('ABSPATH')) {
	die;
}

/**
 * Register Gutenber Scripts
 */
add_action( 'enqueue_block_editor_assets', function() {
    wp_enqueue_script(
        'wp-custom-block-editor-script',
        plugins_url( 'build/index.js', __FILE__ ),
        [
            'wp-plugins',
            'wp-blocks',
            'wp-editor',
            'wp-edit-post',
            'wp-i18n',
            'wp-element',
            'wp-components',
            'wp-data'
        ]
    );
} );

/**
 * Enqueue Styles
 */
// add_action( 'wp_enqueue_scripts', function() {
//     wp_enqueue_style( 'wp-custom-block-style', plugins_url( 'assets/css/style.css', __FILE__ ), [], false, 'all' );
// } );
// add_action( 'admin_enqueue_scripts', function() {
//     wp_enqueue_style( 'wp-custom-block-editor-style', plugins_url( 'assets/css/editor.css', __FILE__ ), [], false, 'all' );
// } );

/**
 * Register A Block
 */
add_action( 'init', function() {
    register_block_type(
        'wp-custom-block/call-to-action',
        [
            'style' => 'wp-custom-block-style',
            'editor_style' => 'wp-custom-block-editor-style',
            'editor_scripts' => 'wp-custom-block-editor-script',
        ]
    );
} );
