//
// Filename: gulpfile.js
// Version: 1.5
//

////////////////////
// Modules
////////////////////
var gulp      = require('gulp'),
    gutil     = require('gulp-util'),
    concat    = require('gulp-concat'),
    coffee    = require('gulp-coffee'),
    minifycss = require('gulp-minify-css'),
    less      = require('gulp-less'),
    rename    = require('gulp-rename'),
    banner    = require('gulp-header'),
    concat    = require('gulp-concat'),
    uglify    = require('gulp-uglify'),
    live      = require('gulp-livereload'),
    // imagemin  = require('gulp-imagemin'),
    pkg       = require('./package.json');

////////////////////
// Directory
////////////////////
var assets = {
    'public'    :'public/assets/',
    'lib_dir'   :'assets/lib/',
    'fonts'     :'assets/fonts/',
    'vendor'    :'vendor/',
    'coffee'    :'assets/coffee/',
    'compiled'  :'storage/assets/',
    'img'       :'assets/images/',
    'images'    :'assets/images/',
    'css'       :'assets/css/',
    'less'      :'assets/less/'
};

var _bootstrap = {
    'banner': ['/*!',
        ' * ' + pkg.name + ' v' + pkg.version + ' ' + pkg.homepage,
        ' * Copyright (c) Xky3 - 2014',
        ' */',
        ''].join('\n'),
    'jQuery': 'if (typeof jQuery === \'undefined\') { throw new Error(\'Bootstrap\\\'s JavaScript requires jQuery\') }\n\n'
};

//////////////////////////////////////////////////
// Bootstrap (http://getbootstrap.com)
// https://github.com/twbs/bootstrap
//////////////////////////////////////////////////
gulp.task('bootstrap', ['bootstrap:less', 'bootstrap:fonts', 'bootstrap:js'], function()
{
    gulp.src([
        assets.css      + '*.css',
        assets.compiled + 'all.css',
        assets.vendor   + 'bootstrap-select/dist/css/bootstrap-select.css', // Bootstrap-select (http://silviomoreto.github.io/bootstrap-select)
        assets.vendor   + 'animate.css/animate.css', // Animate.CSS (https://github.com/daneden/animate.css)
        assets.vendor   + 'font-awesome/css/font-awesome.css' // Font Awesome
    ])
        .pipe( concat('styles.css') )
        .pipe( gulp.dest(assets.public + 'css/') )
        .pipe( minifycss({ keepSpecialComments: 0 }) )
        .pipe( rename({ suffix: '.min' }) )
        .pipe( gulp.dest(assets.public + 'css/') );
});
gulp.task('bootstrap:less', function()
{
    gulp.src( assets.less + 'all.less' )
        .pipe( less().on('error', gutil.log) )
        .pipe( gulp.dest(assets.compiled) );
});
gulp.task('bootstrap:fonts', function()
{
    return gulp.src([
        assets.vendor + 'bootstrap/fonts/*',
        assets.vendor + 'font-awesome/fonts/*'
    ])
        .pipe( gulp.dest(assets.public + 'fonts/') );
});
gulp.task('bootstrap:js', function()
{
    return gulp.src([
        assets.vendor + 'bootstrap/js/transition.js',
        assets.vendor + 'bootstrap/js/alert.js',
        assets.vendor + 'bootstrap/js/button.js',
        assets.vendor + 'bootstrap/js/carousel.js',
        assets.vendor + 'bootstrap/js/collapse.js',
        assets.vendor + 'bootstrap/js/dropdown.js',
        assets.vendor + 'bootstrap/js/modal.js',
        assets.vendor + 'bootstrap/js/tooltip.js', // Tooltip.js must be first before PopOver.js
        assets.vendor + 'bootstrap/js/popover.js',
        assets.vendor + 'bootstrap/js/scrollspy.js',
        assets.vendor + 'bootstrap/js/tab.js',
        assets.vendor + 'bootstrap/js/affix.js',
        assets.vendor + 'bootstrap-select/bootstrap-select.js',
        assets.vendor + 'bootstrap-paginator/build/bootstrap-paginator.js',
        assets.vendor + 'nprogress/nprogress.js' ])
        .pipe( concat('bootstrap.js') )
        .pipe( banner(_bootstrap.jQuery) )
        .pipe( gulp.dest(assets.compiled) );
});

//////////////////////////////////////////////////
// jQuery (http://jquery.com)
// https://github.com/jquery/jquery
//////////////////////////////////////////////////
gulp.task('jquery', function()
{
    return gulp.src( [
        assets.vendor + 'jquery/dist/jquery.js',
        assets.vendor + 'jquery/dist/jquery.min.js',
        assets.vendor + 'jquery/dist/jquery.min.map' ])
        .pipe( gulp.dest(assets.public + 'vendor/jquery/') );
});

gulp.task('jquery:plugins', function()
{
    return gulp.src([
        assets.vendor + 'jquery.lazyload/jquery.lazyload.js',
        assets.vendor + 'jquery.lazyload/jquery.scrollstop.js',
        assets.vendor + 'owl.carousel/dist/owl.carousel.js',
        assets.vendor + 'jquery-touchswipe/jquery.touchSwipe.js',
        assets.vendor + 'jquery-validation/dist/jquery.validate.js',
        assets.vendor + 'jquery-colorbox/jquery.colorbox.js',
        assets.vendor + 'photoset-grid/jquery.photoset-grid.js',
        assets.vendor + 'perfect-scrollbar/src/jquery.mousewheel.js',
        assets.vendor + 'perfect-scrollbar/src/perfect-scrollbar.js',
        assets.vendor + 'skrollr/src/skrollr.js',
        assets.vendor + 'jquery.transit/jquery.transit.js' ])
        .pipe( concat('jquery_plugins.js') )
        .pipe( gulp.dest(assets.compiled) )
        .pipe( uglify({ mangle: false, compress: true }))
        .pipe( rename({ suffix: '.min' }))
        .pipe( gulp.dest(assets.compiled) );
});

//////////////////////////////////////////////////
// AngularJS (http://angularjs.org/)
// https://github.com/angular/angular.js
//////////////////////////////////////////////////
gulp.task('angular', ['angular:modules'], function()
{
    return gulp.src( [
        assets.vendor + 'angular/angular.js',
        assets.vendor + 'angular/angular.min.js',
        assets.vendor + 'angular/angular.min.js.map',
        assets.vendor + 'angular/angular.min.js.gzip' ])
        .pipe( gulp.dest(assets.public + 'vendor/angular/') );
});
gulp.task('angular:modules', function()
{
    // Behold source
    gulp.src( [
        assets.vendor + 'angular-animate/angular-animate.js',
        assets.vendor + 'angular-bootstrap/ui-bootstrap.js',
        assets.vendor + 'angular-bootstrap/ui-bootstrap-tpls.js',
        // assets.vendor + 'angular-cookies/angular-cookies.js',
        assets.vendor + 'angular-route/angular-route.js',
        // assets.vendor + 'angular-touch/angular-touch.js',
        // assets.vendor + 'textAngular/src/textAngularSetup.js',
        // assets.vendor + 'textAngular/src/textAngular.js',
        // assets.vendor + 'textAngular/src/textAngular-sanitize.js',
        // assets.vendor + 'ngInfiniteScroll/build/ng-infinite-scroll.js',
        // assets.vendor + 'angular-cookies/angular-cookies.js',
        assets.vendor + 'ngUpload/ng-upload.js' ])
        .pipe( gulp.dest( assets.public + 'vendor/angular/' ) )
        .pipe( concat('angular_modules.js') ) // Concatenate first
        .pipe( gulp.dest( assets.compiled) )
        .pipe( gulp.dest( assets.public + 'vendor/angular/' ) )// send to public directory.
        .pipe( uglify({ mangle: false, compress: true, sourceMap: true }) ) // Now let's try to uglify it
        .pipe( rename({ suffix: '.min' }) ) // and rename the concatenate
        .pipe( gulp.dest( assets.compiled) )
        .pipe( gulp.dest( assets.public + 'vendor/angular/' ) ); // lastly send to public directory

    // All minified modules
    gulp.src( [
        assets.vendor + 'angular-animate/angular-animate.min.js',
        assets.vendor + 'angular-bootstrap/ui-bootstrap.min.js',
        assets.vendor + 'angular-bootstrap/ui-bootstrap-tpls.min.js',
        // assets.vendor + 'angular-cookies/angular-cookies.min.js',
        assets.vendor + 'angular-route/angular-route.min.js',
        // assets.vendor + 'angular-touch/angular-touch.min.js',
        // assets.vendor + 'textAngular/dist/textAngular.min.js',
        // assets.vendor + 'textAngular/dist/textAngular-sanitize.min.js',
        // assets.vendor + 'ngInfiniteScroll/build/ng-infinite-scroll.min.js',
        // assets.vendor + 'angular-cookies/angular-cookies.min.js',
        assets.vendor + 'ngUpload/ng-upload.min.js' ])
        .pipe( gulp.dest( assets.public + 'vendor/angular/' ) );

    // Behold the angular modules with map
    gulp.src( [
        assets.vendor + 'angular-animate/angular-animate.min.js.map',
        // assets.vendor + 'angular-cookies/angular-cookies.min.js.map',
        assets.vendor + 'angular-route/angular-route.min.js.map',
        // assets.vendor + 'angular-touch/angular-touch.min.js.map',
        // assets.vendor + 'angular-cookies/angular-cookies.min.js.map',
        assets.vendor + 'ngUpload/ng-upload.min.js.map' ])
        .pipe( gulp.dest( assets.public + 'vendor/angular/' ) );

});

gulp.task('js:coffee', function()
{
    // Do not concatenate dashboard with global
    // Seperate them
    gulp.src( [
        assets.coffee + 'env.coffee',
        assets.coffee + 'global/namespace.coffee',
        assets.coffee + 'global/pre_load.coffee',
        assets.coffee + 'global/global_*.coffee',
        assets.coffee + 'global/post_load.coffee'
    ])
        .pipe( coffee({ bare: true }).on( 'error', gutil.log ) )
        .pipe( concat('global_scripts.js') )
        .pipe( gulp.dest(assets.compiled) );


});
gulp.task('js', ['bootstrap:js', 'jquery:plugins', 'js:coffee'], function()
{
    gulp.src([
        assets.compiled + 'angular_modules.js',
        assets.compiled + 'bootstrap.js',
        // assets.compiled + 'jquery_plugins.js',
        assets.compiled + 'global_scripts.js'
    ])
        .pipe( concat('script.js') )
        .pipe( gulp.dest(assets.public + 'js/') )
        .pipe( uglify({ mangle:false, compress:true }) )
        .pipe( rename({ suffix: '.min'}) )
        .pipe( gulp.dest(assets.public + 'js/') );

});

gulp.task('image', ['image:compress'], function()
{
    gulp.src( assets.img + '**' )
        .pipe( gulp.dest(assets.public + 'images/src/') );
    gulp.src( assets.img + '**')
        .pipe( imagemin({
            progressive: true,
            optimizationLevel: 5
        }) )
        .pipe( gulp.dest( assets.public + 'images/' ) );
});

gulp.task('image:compress', function() {
    return gulp.src( assets.img + '**')
        .pipe( imagemin({
            progressive: true,
            optimizationLevel: 5
        }) )
        .pipe( gulp.dest( assets.public + 'images/' ) );
});
gulp.task('image:uncompress', function() {
    return gulp.src( assets.img + '**')
        .pipe( gulp.dest( assets.public + 'images/' ) );
});

gulp.task('watch', function()
{
    live.listen();
    // gulp.watch('app/**/**.php').on('change', live.changed);
    gulp.watch(assets.less + '**/*.less', ['bootstrap']).on('change', live.changed);
    gulp.watch(assets.coffee + '**/**/*.coffee', ['js']).on('change', live.changed);
});

gulp.task('transfer', function() 
{
    gulp.src([
        assets.vendor + 'bootstrap-select/dist/css/bootstrap-select.css.map' ])
    .pipe( gulp.dest( assets.public + '/css/') );
});


gulp.task('build', ['jquery', 'angular', 'js', 'bootstrap']);

gulp.task('production',  ['transfer', 'build', 'image']);
gulp.task('development',  ['transfer', 'build', 'watch']);
gulp.task('dev', ['development']); // ALIAS
gulp.task('prod', ['production']); // ALIAS

gulp.task('default', ['development']);