module.exports = function () {
	var eventsService = {
		search: false,
		menu: false,
		options: false
	};
	
	eventsService.toggle_menu = function () {
		eventsService.menu = !eventsService.menu;
	};

	eventsService.toggle_search = function () {
		eventsService.search = !eventsService.search;
	};

	eventsService.toggle_options = function () {
		eventsService.options = !eventsService.options;
	};

	return eventsService;
};
