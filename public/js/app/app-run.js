module.exports = function ($rootScope, $state) {
	$rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
		// console.log('$stateChangeStart to '+toState.to+'- fired when the transition begins. toState,toParams : \n',toState, toParams);
		if(toState.authenticate){
			event.preventDefault();
			$state.go("login");
		}
	});
	$rootScope.$on('$stateChangeError',function(event, toState, toParams, fromState, fromParams){
		event.preventDefault();
		console.log('$stateChangeError - fired when an error occurs during transition.');
		console.log(arguments);
	});

	// $rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams){
	// 	console.log('$stateChangeSuccess to '+toState.name+'- fired once the state transition is complete.');
	// });

	// $rootScope.$on('$viewContentLoaded',function(event){
	// 	console.log('$viewContentLoaded - fired after dom rendered',event);
	// });

	$rootScope.$on('$stateNotFound',function(event, unfoundState, fromState, fromParams){
		console.log('$stateNotFound '+unfoundState.to+'  - fired when a state cannot be found by its name.');
		console.log(unfoundState, fromState, fromParams);
	});
};
