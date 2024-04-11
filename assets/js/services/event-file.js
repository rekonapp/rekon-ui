evenPicServices.service('EventFileService', function($http) {
	const list = filter => $http.get(`${apiBaseUrl}/event-file/`, { params: filter });

	const find = filter => $http.get(`${apiBaseUrl}/event-file/${filter.id}`, { params: { event_key: filter.event_key } });

	const search = data => $http.post(`${apiBaseUrl}/event-file/search`,  { event_key: '78aa9312-fb4d-43e6-8049-964932063133', image: data.image } );

	return {
		list,
        find,
        search
	};
});
