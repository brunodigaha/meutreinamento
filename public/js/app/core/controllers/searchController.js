var fs = require('fs');
module.exports = function($scope,$mdDialog, $mdToast,$animate) {
	$scope.open_user = function(event) {
		var confirm = $mdDialog.confirm()
		.title('Deseja Abrir este Usuário?')
		.content('A ficha do usuário será aberta para consultas')
		.ariaLabel('Lucky day')
		.ok('Abrir!')
		.cancel('Cancelar.')
		.targetEvent(event);
		$mdDialog.show(confirm).then(function() {
			// alert('O usuário foi Aberto!'); 
			$mdToast.show(
				$mdToast.simple()
					.content("Aberto com sucesso!")
					.position("top right")
					.action('x')
					.hideDelay(2000)
			).then( function() {
				alert("teste");
			});
		}, function() {
			// alert('Foi cancelado');
			console.log("cancelou abrir usuario");
		});
	};
	$scope.new_user = function(ev) {
		$mdDialog.show({
			controller: 'searchDialogController',
			// templateUrl: 'dialog1.tmpl.html',
			template: fs.readFileSync(__dirname + '/../templates/searchDialogTemplate.html'),
			parent: angular.element(document.body),
			targetEvent: ev,
		})
		.then(function(answer) {
			$scope.alert = 'You said the information was "' + answer + '".';
		}, function() {
			$scope.alert = 'You cancelled the dialog.';
		});
	};

};
