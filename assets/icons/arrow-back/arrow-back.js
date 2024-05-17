
evenPicServices.directive('arrowBackIcon', function() {
    return {
        restrict: 'E',
        require: 'cy',
        replace: true,
        templateUrl: 'assets/icons/arrow-back/arrow-back.html',
    };
});
