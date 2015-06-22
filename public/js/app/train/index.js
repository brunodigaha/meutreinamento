module.exports = angular.module('train',[])
		.controller('TrainingGridBottomSheetCtrl', require('./controllers/TrainingGridBottomSheetCtrl.js'))
		.controller('addTrainingController', require('./controllers/addTrainingController.js'))
		.controller('ImportDialogController', require('./controllers/ImportDialogController.js'));
