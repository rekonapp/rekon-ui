evenPicServices.directive('gallery', function(
    $state,
    $window
) {
	return {
        templateUrl: 'assets/js/components/gallery/gallery.html',
        replace: true,
        scope: {
            photos: '='
        },
		link: function(scope) {
            const redirectPagesByModule = {
                'event-gallery': 'event-gallery-photo'
            };
            
            const onClickImage = imageId => {
                const windowLocation = $window.location?.pathname.split('/')[1];

				const redirectAction = redirectPagesByModule[windowLocation];

                $state.go(redirectAction, { id: imageId });
            };

            scope.onClickImage = onClickImage;
		}
	};
});
