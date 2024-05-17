evenPicServices.directive('galleryImage', function() {
	return {
        templateUrl: 'assets/js/components/gallery-image/gallery-image.html',
        replace: true,
        scope: {
            photo: '=',
            onClickImage: '='
        },
        link: function (scope, element) {
            const image = jQuery(element);

            image.on('load', () => {
                image.removeClass('lazy-loading');
            })
        }
	};
});
