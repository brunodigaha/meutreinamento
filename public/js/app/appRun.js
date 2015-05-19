module.exports = function ($rootScope, $state,$stateParams, authModelService) {
	$rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
		// console.log('$stateChangeStart to '+toState.to+'- fired when the transition begins. toState,toParams : \n',toState, toParams);
		// console.log("fromSate",fromState);
		// console.log("tostate", toState);
		// console.log("toParam", toParams);
		// console.log("fromParam", fromParams);
		if(toState.authenticate && !authModelService.init_token()){
			event.preventDefault();
			$state.go("login");
		}else if(toState.name == 'login' && authModelService.authenticated) {
			event.preventDefault(); 
			console.log("nao entrar login");
			$state.go('core.user', {userId:12});
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

	// $state.transitionTo($state.current, $stateParams, {
	// 	reload: true,
	// 	inherit: false,
	// 	notify: true
	// });
};
