const apiBaseUrl = window.__env.baseUrl;
const modules = ['ui.router', 'ui.bootstrap', 'ui.utils.masks'];
const evenPicServices = angular.module('evenPicApp', modules);

evenPicServices.config(function($stateProvider, $urlRouterProvider) {
    const customParseFormat = window.dayjs_plugin_customParseFormat;
    
    dayjs.extend(customParseFormat);

    const otherwiseFlow = () => {
        if (!localStorage.getItem('current_page')) {
			return '/home';
        }

        return `/${localStorage.getItem('current_page')}`;
    };

    $stateProvider.state('home', {
		url: '/home',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
	});
    
    $stateProvider.state('event-gallery', {
		url: '/event-gallery',
        templateUrl: 'views/event-gallery.html',
        controller: 'EventGalleryCtrl'
	});

    $urlRouterProvider.otherwise(otherwiseFlow);
	$urlRouterProvider.when('/', otherwiseFlow);
});

evenPicServices.config(function($httpProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
});
