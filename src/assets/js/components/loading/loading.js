evenPicServices.directive('tablerLoading', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            text: '@',
            labelFor: '@'
        },
        templateUrl: 'src/assets/js/components/loading/loading.html'
    };
});
