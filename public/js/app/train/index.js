module.exports = angular.module('train',[])
		.controller('listTrainingController', require('./controllers/listTrainingController.js'))
		.controller('trainingController', require('./controllers/trainingController.js'))
		.controller('addTrainingController', require('./controllers/addTrainingController.js'))
		.controller('historyTrainingController', require('./controllers/historyTrainingController.js'))
		.controller('collectionTrainingController', require('./controllers/collectionTrainingController.js'))
		.controller('ImportDialogController', require('./controllers/ImportDialogController.js'));
