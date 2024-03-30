evenPicServices.controller('EventGalleryPhotoCtrl', function(
	$q,
	$scope,
	$stateParams,
	EventFileService
) {
	$scope.photos = [];

	const listFiles = () => {
		return EventFileService.list({
			event_key: window.__env.eventKey
		}).then(resp => {
			$scope.photos = _.get(resp.data, 'data');
		});
	};

	const findFile = () => {
		return EventFileService.find({
			event_key: window.__env.eventKey,
			id: $stateParams.id
		}).then(resp => {
			$scope.photo = _.get(resp.data, 'data');
		});
	};

	const init = () => {
		$scope.loading = true;

		$q.all([listFiles(), findFile()]).finally(() => {
			$scope.loading = false;
		});
	};

	init();
});
