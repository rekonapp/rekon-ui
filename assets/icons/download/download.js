evenPicServices.directive('downloadIcon', function() {
    return {
        restrict: 'E',
        require: 'cy',
        replace: true,
        templateUrl: 'assets/icons/download/download.html',
    };
});
