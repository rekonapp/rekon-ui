evenPicServices.controller('EventGalleryPhotoCtrl', function(
	$q,
	$scope,
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

    const getFileNameFromUrl = (url = '') => {
		return url
			.replace(/\?AWSAccessKeyId=.*/, '')
			.substring(url.lastIndexOf('/') + 1);
	};

    const onDownloadClick = photo => {
        fetch(photo.url).then(image => {
            image.blob().then((imageBlog) => {
                const imageURL = URL.createObjectURL(imageBlog);
                const link = document.createElement('a');

                link.href = imageURL;
                link.download = getFileNameFromUrl(`${photo.url}&v=${Date.now()}`);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });
        });
    };

	init();
    $scope.onDownloadClick = onDownloadClick;
    $scope.onClickImage = onClickImage;
});
