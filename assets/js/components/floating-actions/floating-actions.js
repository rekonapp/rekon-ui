evenPicServices.directive('floatingActions', function(
    $window,
    $state,
    Utils
) {
	return {
		templateUrl: 'assets/js/components/floating-actions/floating-actions.html',
		replace: true,
        link: function(scope) {
            const handleUploadPicture = event => {
                if (!event || !event.target || !event.target.files) {
                    return false;
                }
                const picture = event.target.files[0];

                const reader = new FileReader();

                reader.readAsDataURL(picture);

                reader.onload = function() {
                    const base64Image = reader.result;

                    Utils.handleSubmitImage(base64Image);
                };
            };

            const init = () => {
                pictureInput.off('change');
				pictureInput.on('change', handleUploadPicture);
            };

            // Verificar se o dispositivo é um celular
            const isMobileDevice = () => {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            };

            // Verificar se o dispositivo é um tablet
            const isTabletDevice = () => {
                return /iPad|Android|Tablet/i.test(navigator.userAgent);
            };

            // Verificar se o dispositivo é um desktop
            const isDesktopDevice = () => {
                return !isMobileDevice() && !isTabletDevice();
            };

            const pictureInput = jQuery('#file');

			const openPictureInput = () => {
				pictureInput.trigger('click');
			}

            const handleUploadModal = ( ) => {
                console.log(1);
            };

            scope.onFindMeClick = () => {
                if (isMobileDevice() || isTabletDevice()) {
                    openPictureInput();
                } else if (isDesktopDevice()) {
                    openPictureInput();
                } else {
                    openPictureInput();
                }
            };

            scope.onScrollActionClick = () => {
                const currentElement = document.getElementById('gallery-scroll') || window;

                currentElement.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            };

            init();
        }
	};
});
