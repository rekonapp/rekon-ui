evenPicServices.directive('gallery', function() {
	return {
        templateUrl: 'assets/js/components/gallery/gallery.html',
        replace: true,
        scope: {
            photos: '='
        },
		link: function(scope) {
		}
	};
});
