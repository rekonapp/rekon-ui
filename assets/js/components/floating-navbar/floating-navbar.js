
evenPicServices.directive('floatingNavbar', function(
	$state,
	$window,
	$timeout
) {
	return {
		templateUrl: 'assets/js/components/floating-navbar/floating-navbar.html',
		replace: true,
		link: function(scope) {
			scope.navigationComponents = {};

			const homeComponent = {
				label: 'Home',
				active: false
			};

			const galleryComponent = {
				label: 'Galeria'
			};

			const mappedComponentsByLocation = {
				'event-gallery': {
					navigation: [homeComponent, { ...galleryComponent, active: true }],
					redirect: 'home'
				}
			};

			const onReturnClick = () => {
				const windowLocation = ($window.location.pathname || '/home').split('/')[1];
				const redirectAction = mappedComponentsByLocation[windowLocation]?.redirect;

				$state.go(redirectAction);
			};

			const getNavigationComponents = () => {
				const windowLocation = ($window.location.pathname || '/home').split('/')[1];

				return mappedComponentsByLocation[windowLocation];
			};

			const init = () => {
				$timeout(() => {
					scope.navigationComponents = getNavigationComponents();
				});
			};

			init();
			scope.onReturnClick = onReturnClick;
		}
	};
});
