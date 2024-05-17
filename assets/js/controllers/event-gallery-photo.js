evenPicServices.controller('EventGalleryPhotoCtrl', function(
	$q,
	$scope,
    $timeout,
    Utils,
	$stateParams,
	EventFileService
) {
	$scope.photo = {};
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

    const onClickImage = photo => {
        $scope.photo = angular.copy(photo);
    };

    const onDownloadClick = () => {
        $scope.downloadingPhoto = true;

        fetch($scope.photo.url).then(image => {
            return image.blob().then((imageBlog) => {
                const imageURL = URL.createObjectURL(imageBlog);
                const link = document.createElement('a');

                link.href = imageURL;
                link.download = Utils.getFileNameFromUrl(`${$scope.photo.url}&v=${Date.now()}`);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                $timeout(() => {
                    $scope.downloadingPhoto = false;
                })
            });
        });
    };

	init();
    $scope.onDownloadClick = onDownloadClick;
    $scope.onClickImage = onClickImage;
});
