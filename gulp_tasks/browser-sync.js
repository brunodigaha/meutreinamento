//Task BrowserSync
process.chdir('../vittapro');
module.exports = function (gulp,plugins,path){
	return function() {
	    plugins.browserSync.init(null, {
	        proxy: "http://localhost:3000",
	        files: path.build,
	        browser: "google chrome",
	        port: 5000,
	        notify: true
	    });
	};
};
