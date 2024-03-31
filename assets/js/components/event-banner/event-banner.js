evenPicServices.directive('eventBanner', function() {
	return {
        templateUrl: 'assets/js/components/event-banner/event-banner.html',
        replace: true,
		link: function(scope) {
            scope.url = 'https://storage.googleapis.com/portal-da-promo/L01_card_promocaobudweiser-melevalollapalooza-20231677620126368.webp';
		}
	};
});
