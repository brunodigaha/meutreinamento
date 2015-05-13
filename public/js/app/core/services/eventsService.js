module.exports = function () {
	var eventsService = {
		search: false,
		menu: false,
	};

	
	eventsService.toggle_menu = function () {
		eventsService.menu = !eventsService.menu;
	};


	eventsService.toggle_search = function () {
		eventsService.search = !eventsService.search;
	};

	return eventsService;
};
