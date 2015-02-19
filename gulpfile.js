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
gulp.task('moveTemplates', getTask('moveTemplates'));
gulp.task('stylus', getTask('stylus'));
gulp.task('js-prod', getTask('js-prod'));
gulp.task('jsValidate', getTask('jsValidate'));
gulp.task('nodemon', getTask('nodemon'));
gulp.task('clear-build-all', getTask('clear-build-all'));
gulp.task('browserSync', ['nodemon'],getTask('browserSync'));

// Task development
gulp.task('default',plugins.sequence(['clear-build-all','jsValidate','stylus'],'browserSync'));

//task production
gulp.task('prod', plugins.sequence('js-prod','moveTemplates'));