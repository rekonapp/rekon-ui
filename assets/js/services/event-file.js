evenPicServices.service('EventFileService', function($http) {
	const list = filter => $http.get(`${apiBaseUrl}/event-file/`, { params: filter });

	const find = filter => $http.get(`${apiBaseUrl}/event-file/${filter.id}`, { params: { event_key: filter.event_key } });

	const search = data => $http.post(`${apiBaseUrl}/event-file/search`,  { event_key: data.event_key, image: data.image } );

	return {
		list,
        find,
        search
	};
});
