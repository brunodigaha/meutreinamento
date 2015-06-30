var fs = require('fs');
module.exports = {
	train : {
		listTraining : {
			authenticate: true,
			ncyBreadcrumb: {
				label: 'Treinos'
			},
			views: {
				resolve: {
						init: function($state,$location){
							// $state.go('core.user.listTraining.training',{'trainId':10});
							// $state.go('.child.grandchild');
							// $location.path('#/user/12/list-training/0');
							return {};
						}
				},
				// onEnter: function($state){
				// 	$state.go('core.user.listTraining.training',{'trainId':10});
				// },
				'content@core': {
					controller:'listTrainingController',
					template: fs.readFileSync(__dirname + '/templates/listTrainingContent.html')
				},
			}
		},
		training : {
			authenticate: true,
			ncyBreadcrumb: {
				label: 'Treinos'
			},
			views: {
				'training@core.user.listTraining': {
					controller:'trainingController',
					template: fs.readFileSync(__dirname + '/templates/trainingTrainingContent.html')
				},
			}
		},
		addtraining : {
			authenticate: true,
			ncyBreadcrumb: {
				label: 'Inserir Treino'
			},
			views: {
				'wrap@': {
					controller: 'addTrainingController',
					template: fs.readFileSync(__dirname + '/templates/addtrainingWrap.html')
				}
			}
		},
		trainingHistory : {
			authenticate: true,
			ncyBreadcrumb: {
				label: 'Histórico Treinos'
			},
			views: {
				'content@core': {
					controller: 'historyTrainingController',
					template: fs.readFileSync(__dirname + '/templates/historyTrainingContent.html')
				}
			}
		},
		collectionTraining : {
			authenticate: true,
			ncyBreadcrumb: {
				label: 'Coleção Treinos'
			},
			views: {
				'content@core': {
					controller: 'collectionTrainingController',
					template: fs.readFileSync(__dirname + '/templates/collectionTrainingContent.html')
				}
			}
		}
	}
};
