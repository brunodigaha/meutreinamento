module.exports = function($scope, coreEventsService, RestangularCustom, $mdDialog, $mdToast, $animate) {
	var coreEvents = $scope.coreEvents = coreEventsService;
	// $scope.user = RestangularCustom.all('usuario').getList().$object;
	$scope.doSecondaryAction = function(event) {
		var confirm = $mdDialog.confirm()
		.title('Você realmente deseja fechar este usuário?')
		.content('O usuário será fechado, para acesso a ele novamente é necessário reabrí-lo.')
		.ariaLabel('Lucky day')
		.ok('Fechar !')
		.cancel('Cancelar')
		.targetEvent(event);
		$mdDialog.show(confirm).then(function() {
			// alert('O usuário foi Aberto com sucesso !');
			$mdToast.show(
				$mdToast.simple()
				.content("AlunAluno Fechado com Sucesso!")
				.position("top right")
				.action('x')
				.hideDelay(2500)
			).then( function() {
				alert("teste");
			});
			coreEventsService.toggle_search();

		}, function() {
			// alert('Foi cancelado');
		});
	};	


};
