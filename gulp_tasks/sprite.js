module.exports = function(gulp,plugins) {
	return function() {
		gulp.src('./public/images/files/**/*.png')
			.pipe(plugins.cssSprite.stream({
				name: 'sprites',
				style: '_sprites.styl',
				cssPath: '../images/',
				processor: 'stylus',
				orientation: 'bindary-tree'
			}))
			.pipe(plugins.if('*.png', gulp.dest('./public/images/'), gulp.dest('./public/css/stylus/')));
	};
};