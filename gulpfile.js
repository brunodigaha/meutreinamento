/**
* Dependencies.
*/
var gulp    = require('gulp');

var plugins = require('gulp-load-plugins')({
    pattern: ['gulp-*','browser-sync']
});

function getTask(task) {
    return require('./gulp_tasks/' + task)(gulp, plugins);
}

// Tasks development
gulp.task('stylus', getTask('stylus'));
gulp.task('nodemon', getTask('nodemon'));
gulp.task('browserSync', ['nodemon'],getTask('browserSync'));

gulp.task('watch', function(){
	gulp.watch(['public/css/stylus/**/*.styl','public/css/*.css'],['stylus']);
});

// Task development
gulp.task('default',plugins.sequence(['stylus','watch'],'browserSync'));

//task production
// gulp.task('prod', plugins.sequence('js-prod','moveTemplates'));