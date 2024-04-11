evenPicServices.directive('instagramIcon', function() {
    return {
        restrict: 'E',
        require: 'cy',
        replace: true,
        templateUrl: 'assets/icons/instagram/instagram.html',
    };
});
