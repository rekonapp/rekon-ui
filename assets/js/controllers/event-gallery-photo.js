evenPicServices.controller('EventGalleryPhotoCtrl', function($scope, EventFileService) {
    $scope.photos = [];

    const init = () => {
        $scope.loading = true;

        EventFileService.list({
            event_key: window.__env.eventKey
        }).then(resp => {
            $scope.photos = _.get(resp.data, 'data');
        }).finally(() => {
            $scope.loading = false;
        });
    };

    init();
});
