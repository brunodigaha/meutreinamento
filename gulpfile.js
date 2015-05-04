/**
* Dependencies.
*/
var gulp    = require('gulp');

var plugins = require('gulp-load-plugins')({
    pattern: ['gulp-*','browser-sync', 'browserify', 'vinyl-source-stream']
});

function getTask(task) {
    return require('./gulp_tasks/' + task)(gulp, plugins);
}

// Tasks development
gulp.task('stylus', getTask('stylus'));
gulp.task('sprite', getTask('sprite'));
gulp.task('nodemon', getTask('nodemon'));
gulp.task('browserSync', ['nodemon'],getTask('browserSync'));
gulp.task('browserify',getTask('browserify'));

gulp.task('watch', function(){
	gulp.watch(['public/css/stylus/**/*.styl','public/css/*.css'],['stylus']);
	gulp.watch(['./public/images/files/**/*.png', './public/images/'],['sprite']);
	gulp.watch(['public/js/app/**/*.js'],['browserify']);
});

// Task development
gulp.task('default',plugins.sequence(['stylus','sprite','browserify','watch'],'browserSync'));

//task production
// gulp.task('prod', plugins.sequence('js-prod','moveTemplates'));