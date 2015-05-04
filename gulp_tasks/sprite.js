module.exports = function(gulp,plugins) {
	return function() {
		gulp.src('./public/images/files/**/*.png')
			.pipe(sprite({
				name: 'sprites',
				style: '_sprites.styl',
				cssPath: '../images/',
				processor: 'stylus',
				orientation: 'bindary-tree'
			}))
			.pipe(plugins.gulpif('*.png', gulp.dest('./public/images/'), gulp.dest('./public/css/stylus/')))
	};
};