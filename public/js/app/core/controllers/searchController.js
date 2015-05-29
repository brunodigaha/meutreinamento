module.exports = function($scope,$mdDialog) {
	$scope.onUCUploadComplete = function (info){
		console.log(info);
		$scope.image=info.cdnUrl;
		console.log(info.cdnURL);
		$scope.$digest();
	};
	$scope.open_user = function(event) {
		var confirm = $mdDialog.confirm()
		.title('Deseja Abrir este Usuário?')
		.content('A ficha do usuário será aberta para consultas')
		.ariaLabel('Lucky day')
		.ok('Abrir!')
		.cancel('Cancelar.')
		.targetEvent(event);
		$mdDialog.show(confirm).then(function() {
			alert('O usuário foi Aberto!'); 
		}, function() {
			// alert('Foi cancelado');
			console.log("cancelou abrir usuario");
		});
	};
};
