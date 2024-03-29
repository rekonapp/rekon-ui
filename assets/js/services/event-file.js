evenPicServices.service('EventFileService', function($http) {
	const list = filter => $http.get(`${apiBaseUrl}/event-file/`, { params: filter });

	return {
		list
	};
});
