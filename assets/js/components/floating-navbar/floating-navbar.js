
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
                redirect: 'home',
				active: false
			};

			const galleryComponent = {
				label: 'Galeria',
                redirect: 'event-gallery'
			};

			const personalGalleryComponent = {
				label: 'Sua Galeria',
                redirect: 'personal-gallery'
			};

			const photoComponent = {
				label: 'Foto'
			};

			const mappedComponentsByLocation = {
				'event-gallery': {
					navigation: [homeComponent, { ...galleryComponent, active: true }],
					redirect: 'home'
				},
				'event-gallery-photo': {
					navigation: [homeComponent, { ...galleryComponent, active: false }, { ...photoComponent, active: true }],
                    redirect: 'event-gallery'
				},
                'personal-gallery': {
					navigation: [homeComponent, { ...personalGalleryComponent, active: true }],
                    redirect: 'home'
				},
                'personal-gallery-photo': {
					navigation: [homeComponent, { ...personalGalleryComponent, active: false }, { ...photoComponent, active: true }],
                    redirect: 'personal-gallery'
				}
			};

            const onRedirectClick = path => {
                if (!path) {
                    return;
                }

                $state.go(path);
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
			scope.onRedirectClick = onRedirectClick;
		}
	};
});
