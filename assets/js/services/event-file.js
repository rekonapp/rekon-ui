evenPicServices.service('EventFileService', function($http) {
	const list = filter => $http.get(`${apiBaseUrl}/event-file/`, { params: filter });

	const find = filter => $http.get(`${apiBaseUrl}/event-file/${filter.id}`, { params: { event_key: filter.event_key } });

	return {
		list,
        find
	};
});
