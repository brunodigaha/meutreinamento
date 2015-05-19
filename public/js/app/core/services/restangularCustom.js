module.exports = function ($state,$location,Restangular) {
	return Restangular.withConfig(function(RestangularConfigurer){
		RestangularConfigurer.setErrorInterceptor(function (response) {
			// Redirect the user to the login page if they are not logged in.
			// if (response.status == '403' && response.data.detail == 'Authentication credentials were not provided.') {
			if (response.status == '401') {
				// $state.go('base.home', {userId: 12});
				// $location.url("/login");
				console.log("erro 401 nao autorizado");
			}
			// Redirect the user on a 404.
			if (response.status == '404') {
				// Redirect to a 404 page.
				console.log("error 404");
				// $state.go('base.home', {userId: 12});
				// window.location.href = '/#/';
			}
			return response;
		});
		RestangularConfigurer.setBaseUrl('/api/v1');
		RestangularConfigurer.setFullResponse(true);
		// RestangularConfigurer.setDefaultHeaders({'Authorization': 'Basic OmJkMDRmNGI3NWJiMTR2ZWNjYWZjYmV0NGQyZG1kNjQ1Zm0ycGhiZTg='});
		RestangularConfigurer.setDefaultRequestParams('jsonp', {callback: 'JSON_CALLBACK'});
		RestangularConfigurer.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
			var extractedData;
				if (operation === "getList") {
					extractedData = data.result.role;
					console.log(response);
					extractedData.error = data.error;
					extractedData.paging = data.paging;
				} else {
					extractedData = data.result;
				}
				return extractedData;
		});
	});
};
