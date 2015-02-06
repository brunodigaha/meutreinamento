/**
* Dependencies.
*/
var gulp        = require('gulp'),
    plumber     = require('gulp-plumber'),
    jade        = require('gulp-jade'),
    stylus      = require('gulp-stylus'),
    concat      = require('gulp-concat'),
    //minifycss = require('gulp-minify-css'),
    uglify      = require('gulp-uglify'),
    imagemin    = require('gulp-imagemin'),
    sourcemaps  = require('gulp-sourcemaps');
    browserSync = require('browser-sync');
    reload      = browserSync.reload;
    notify      = require('gulp-notify');
    nodemon     = require('gulp-nodemon');

// assets is where you define your application assets and you can pass them into gulp.
var assets = require('./assets');

// File paths
var path = {
    jade:   ['src/templates/front/*.jade'],
    html:   'public/includes/',
    stylus: ['src/styl/**/*.styl'],
    css:    'public/css/',
    jsdev:  ['src/js/**/*.js'],
    js:     'public/js/',
    imgdev: ['src/img/**/*.{jpg,png,svg}'],
    img:    'public/images'
};

var files = {
    styldev: ['src/styl/**/main.styl']
};

var build = [
    'server/**/*.*',
    'src/**/*.*',
    './server.js',
    './assets.js'

];


// Task Jade - https://github.com/phated/gulp-jade
gulp.task('jade', function() {
    gulp.src(path.jade)
        .pipe(jade())
        .pipe(gulp.dest(path.html));
});


//Task Move files To
gulp.task('move', function(){
  // the base option sets the relative root for the set of files,
  // preserving the folder structure
  gulp.src('src/templates/back/*.jade')
  .pipe(gulp.dest('server/views/'));
});


// Task Stylus - https://github.com/stevelacy/gulp-stylus
gulp.task('stylus', function() {
    gulp.src(files.styldev)
        .pipe(stylus({
            compress: true
        })).pipe(gulp.dest(path.css));
});


// Task Concat and Uglify JS - https://github.com/wearefractal/gulp-concat | https://github.com/terinjokes/gulp-uglify
gulp.task('js', ['move'],function() {
    return gulp.src(path.jsdev)
        .pipe(sourcemaps.init())
            .pipe(plumber())
            .pipe(concat('main.js'))
            .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.js));
});


// Task Imagemin - https://github.com/sindresorhus/gulp-imagemin
gulp.task('imagemin', function() {
    return gulp.src(path.imgdev)
        .pipe(imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest(path.img));
});


//Task BrowserSync
gulp.task('browser-sync', ['nodemon'], function() {
    browserSync.init(null, {
        proxy: "http://localhost:3000",
        files: build,
        browser: "google chrome",
        port: 5000,
        notify: true
    });
});


//Task Nodemon
gulp.task('nodemon', function (cb) {
  var called = false;
  return nodemon({
    script: 'server.js',
    ext: 'js jade html',
    ignore: [
      'gulpfile.js',
      'node_modules/',
      ''
    ]
  })
  .on('start', function () {
    if (!called) {
      called = true;
      cb();
    }
  })
  .on('restart', function () {
    setTimeout(function () {
      reload({ stream: false });
    }, 1000);
  });
});


// Task Watch
gulp.task('watch', function() {
    gulp.watch(path.jade, ['jade']);
    gulp.watch(path.stylus, ['stylus']);
    gulp.watch(path.jsdev, ['js']);
    gulp.watch(path.imgdev, ['imagemin']);
    gulp.watch('src/templates/back/*.jade', ['move']);
});


// Task Default
gulp.task('default', ['jade', 'move', 'stylus', 'js', 'imagemin', 'watch', 'browser-sync']);