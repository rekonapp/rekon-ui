evenPicServices.controller('PersonalGalleryPhotoCtrl', function(
    $q,
    Utils,
    $scope,
    $stateParams,
    EventFileService,
    $rootScope,
    $window
) {
    $scope.photo = {};
	$scope.photos = [];

    const findFile = () => {
		return EventFileService.find({
			event_key: window.__env.eventKey,
			id: $stateParams.id
		}).then(resp => {
			$scope.photo = _.get(resp.data, 'data');
		});
	};

    const listFiles = () => {
		return EventFileService.list({
			event_key: window.__env.eventKey
		}).then(resp => {
			$scope.photos = _.get(resp.data, 'data');
		});
	};

    const init = () => {
        const promises = [findFile()];

        if (!$rootScope.personalGalleryInfo && !$window.localStorage.search_image) {
            $stateParams.go('home');

            return;
        }

        if ($rootScope.personalGalleryInfo) {
            const { requestData } = $rootScope.personalGalleryInfo;

            $scope.photos = requestData;

            return;
        }

        if (!$rootScope.personalGalleryInfo && $window.localStorage.search_image) {
            promises.push(Utils.handleSubmitImage($window.localStorage.search_image, true));
        }

		$scope.loading = true;

		$q.all(promises).then(() => {
            const { requestData } = $rootScope.personalGalleryInfo;

            $scope.loading = false;
            $scope.photos = requestData;
        });
	};

    init();
});
