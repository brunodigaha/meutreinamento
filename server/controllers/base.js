// This is the base controller. Used for base routes, such as the default index/root path, 404 error pages, and others.
module.exports = {
    index: {
        handler: function(request, reply){
          // Render the view with the custom greeting
            reply.view('index', {
                title: 'Awesome Boilerplate Homepage',
                message: 'Index - Hello World!'
            });
        },
		auth: false,
        id: 'index'
    },
    about: {
        handler: function(request, reply){
            reply.view('about', {
                title: 'Super Informative About Page'
            });
        },
		auth: false,
        id: 'about'
    },
    missing: {
        handler: function(request, reply){
            reply.view('404', {
                title: 'Total Bummer 404 Page'
            }).code(404);
        },
		auth: false,
        id: '404'
    }
};
