module.exports = angular.module('train',[])
		.directive('training', require('./directives/trainingTrainDirective.js'))
		.controller('listTrainingController', require('./controllers/listTrainingController.js'))
		.controller('trainingTrainingController', require('./controllers/trainingTrainingController.js'))
		.controller('addTrainingController', require('./controllers/addTrainingController.js'))
		.controller('historyTrainingController', require('./controllers/historyTrainingController.js'))
		.controller('collectionTrainingController', require('./controllers/collectionTrainingController.js'))
		.controller('ImportDialogController', require('./controllers/ImportDialogController.js'));
