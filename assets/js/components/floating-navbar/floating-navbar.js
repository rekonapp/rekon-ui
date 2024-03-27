
evenPicServices.directive('floatingNavbar', function() {
	return {
        templateUrl: 'assets/js/components/floating-navbar/floating-navbar.html',
        replace: true,
		link: function(scope) {
            const windowLocation = (window.location.pathname || '/home').split('/')[1];

            const onReturnClick = () => {
                console.log(windowLocation);
            };

            scope.onReturnClick = onReturnClick;
		}
	};
});
