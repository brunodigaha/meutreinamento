// This is the assets controller. Goal is to serve css, js, partials, images, or bower packages.
module.exports = {
    partials: {
        handler: {
            directory: { path: './server/views/partials' }
        },
		auth: false,
        id:'partials'
    },
    images: {
        handler: {
            directory: { path: './public/images' }
        },
		auth: false,
        id:'images'
    },
    css: {
        handler: {
            directory: { path: './public/css' }
       },
		auth: false,
        id:'css'
    },
    js: {
        handler: {
            directory: { path: './public/js' }
        },
		auth: false,
        id:'js'
    },
    bower: {
        handler: {
            directory: { path: './public/bower_components' }
        },
		auth: false,
        id:'bower'
    }
};