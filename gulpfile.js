/**
* Dependencies.
*/
var gulp    = require('gulp');

var plugins = require('gulp-load-plugins')({
    pattern: ['gulp-*','browser-sync']
});


// assets is where you define your application assets and you can pass them into gulp.
var assets = require('./assets');


function getTask(task) {
    return require('./gulp_tasks/' + task)(gulp, plugins, assets.path);
}

gulp.task('jade', getTask('jade'));
gulp.task('move', getTask('move'));
gulp.task('stylus', getTask('stylus'));
gulp.task('js', getTask('js'));
gulp.task('imagemin', getTask('imagemin'));
gulp.task('nodemon', getTask('nodemon'));
gulp.task('browser-sync', ['nodemon'],getTask('browser-sync'));


// Task Watch
gulp.task('watch', function() {

    gulp.watch(assets.path.jsdev, ['js']);

});


// Task Default
gulp.task('default', ['jade', 'js', 'move', 'stylus', 'imagemin', 'watch', 'browser-sync']);