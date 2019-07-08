const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .js('resources/js/guest.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
	.copy('resources/js/pdfjs/viewer.html', 'public/js/pdfjs/viewer.html')
	.copy('node_modules/pdfjs-dist/build/pdf.worker.js', 'public/js/pdfjs/pdf.worker.js')
	.copy('node_modules/pdfjs-dist/build/pdf.js', 'public/js/pdfjs/pdf.js')
    .options({
        processCssUrls: false,
        postCss: [ tailwindcss('./tailwind.config.js') ]
    });
