evenPicServices.controller('PersonalGalleryCtrl', function($rootScope, $state, $scope, $window, Utils) {
    const init = () => {
        if (!$rootScope.personalGalleryInfo && !$window.localStorage.search_image) {
            $state.go('home');
            return;
        }

        if ($rootScope.personalGalleryInfo) {
            const { mainImage, requestData } = $rootScope.personalGalleryInfo;

            $scope.mainImage = mainImage;
            $scope.photos = requestData;

            return;
        }

        if (!$rootScope.personalGalleryInfo && $window.localStorage.search_image) {
            Utils.handleSubmitImage($window.localStorage.search_image, true).then(() => {
                const { mainImage, requestData } = $rootScope.personalGalleryInfo;
    
                $scope.mainImage = mainImage;
                $scope.photos = requestData;
            });

            return;
        }
    };

    init();
});
