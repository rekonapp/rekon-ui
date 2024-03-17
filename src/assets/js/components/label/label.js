evenPicServices.directive('tablerLabel', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            text: '@',
            labelFor: '@'
        },
        templateUrl: 'src/assets/js/components/label/label.html'
    };
});
