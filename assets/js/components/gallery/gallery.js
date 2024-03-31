evenPicServices.directive('gallery', function(
    $state,
    $window
) {
	return {
        templateUrl: 'assets/js/components/gallery/gallery.html',
        replace: true,
        scope: {
            photos: '=',
            activePhoto: '=',
            onClickImageFn: '='
        },
		link: function(scope) {
            const redirectPagesByModule = {
                'event-gallery': 'event-gallery-photo'
            };
            
            const onClickImage = image => {
                if (scope.onClickImageFn) {
                    scope.onClickImageFn(image);

                    return;
                }

                const windowLocation = $window.location?.pathname.split('/')[1];

				const redirectAction = redirectPagesByModule[windowLocation];

                $state.go(redirectAction, { id: image.id });
            };

            scope.onClickImage = onClickImage;
		}
	};
});
