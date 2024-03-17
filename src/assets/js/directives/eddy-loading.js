evenPicServices.directive('eddyLoading', function($rootScope) {
	return {
        replace: true,
		templateUrl: 'src/views/eddy-loading.html',
        scope: {
            loadingHeight: '@'
        },
        link: function (scope) {
            scope.theme = $rootScope.theme;
        }
	};
});
