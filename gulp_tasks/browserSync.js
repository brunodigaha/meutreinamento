//Task BrowserSync
module.exports = function (gulp,plugins){
	return function() {
	    plugins.browserSync.init(null, {
	        proxy: "http://localhost:3000",
	        files:	[
				// 'server/config/*.*',
				// 'server/controllers/*.*',
				// 'server/models/*.*',
				'public/css/*.css',
				// 'public/js/*.js',
				'./server.js'
			],
			port: 8000,
	        notify: true
	    });
	};
};