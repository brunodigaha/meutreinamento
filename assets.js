// assets to be used by the 'hapi-assets' module based on process.env.NODE_ENV
module.exports = {
	path : {
	    jade:   ['src/templates/front/*.jade'],
	    html:   'public/includes/',
	    stylus: ['src/styl/**/*.styl'],
	    css:    'public/css/',
	    jsdev:  ['src/js/**/*.js'],
	    js:     'public/js/',
	    imgdev: ['src/img/**/*.{jpg,png,svg}'],
	    img:    'public/images',
		build : [
	    'server/config/*.*',
	    'server/controllers/*.*',
	    'server/models/*.*',
	    'src/**/*.*',
	    './server.js'
		]
	}
};