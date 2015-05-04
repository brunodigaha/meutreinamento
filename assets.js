// assets to be used by the 'hapi-assets' module based on process.env.NODE_ENV
module.exports = {
	path : {

		index_dev_o: 		['public/index.jade'],
	    jade_dev_o:   		['public/*.jade'],
	    jade_dev_d: 		'server/views/',
	    stylus_o: 			['public/css/stylus/**/*.styl'],
	    stylus_dev_d: 		'public/css/',
	    css:    			'public/css/',
	    jsdev:  			['src/js/**/*.js'],
	    js:     			'public/js/',
	    imgdev: 			['public/images/files/**/*.png'],
	    img:    			'public/images',
		build : 	[
	    'server/config/*.*',
	    'server/controllers/*.*',
	    'server/models/*.*',
	    'public/**/*.*',
	    './server.js'
		]
	}
};