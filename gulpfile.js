/**
* Dependencies.
*/
var gulp    = require('gulp');

var plugins = require('gulp-load-plugins')({
    pattern: ['gulp-*','browser-sync', 'browserify', 'vinyl-source-stream','css-sprite','brfs']
});

function getTask(task) {
    return require('./gulp_tasks/' + task)(gulp, plugins);
}

// Tasks development
gulp.task('sprite', getTask('sprite'));
gulp.task('stylus', getTask('stylus'));
gulp.task('jade', getTask('jade'));
gulp.task('nodemon', getTask('nodemon'));
gulp.task('browserSync', ['nodemon'],getTask('browserSync'));
gulp.task('browserify',getTask('browserify'));

gulp.task('watch', function(){
	gulp.watch(['public/css/stylus/**/*.styl','public/css/*.css'],['stylus']);
	gulp.watch(['public/js/app/**/*.jade'],['jade']);
	gulp.watch(['public/images/files/**/*.png'],['sprite']);
	gulp.watch(['public/js/app/**/*.js','public/js/app/**/*.html'],['browserify']);
});

// Task development
gulp.task('default',plugins.sequence('jade',['sprite','browserify'],'stylus','browserSync','watch'));

//task production
// gulp.task('prod', plugins.sequence('js-prod','moveTemplates'));