evenPicServices.directive('galleryImage', function() {
	return {
        templateUrl: 'assets/js/components/gallery-image/gallery-image.html',
        replace: true,
        scope: {
            photo: '=',
            onClickImage: '='
        }
	};
});
