evenPicServices.directive('tablerBadge', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            label: '@',
            variant: '@',
            loading: '='
        },
        templateUrl: 'src/assets/js/components/badge/badge.html',
        link: function(scope) {
            scope.badgeClass = `badge bg-${scope.variant || 'blue'}`;
        }
    };
});
