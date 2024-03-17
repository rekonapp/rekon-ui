evenPicServices.directive('tablerButton', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            label: '@',
            variant: '@',
            loading: '='
        },
        templateUrl: 'src/assets/js/components/button/button.html',
        link: function(scope) {
            scope.buttonClass = `btn btn-${scope.variant || 'green'}`;
        }
    };
});
