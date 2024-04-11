evenPicServices.service("Utils", function (
    $window,
    $state,
    EventFileService,
    $rootScope,
    ModalUtils
) {
	const isValidEmail = email => {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
        return emailRegex.test(String(email).toLowerCase());
    }

    const getShortName = name => {
        const [firstName, secondName] = name.split(' ');

        if (!secondName) {
            const [firstLetter] = firstName.split('');

            return firstLetter;
        }

        return `${firstName[0]}${secondName[0]}`
    };

    const alertModal = (options, modalSettings) => {
		setTimeout(function() {
			jQuery('.modal-backdrop').css('z-index', 1040);
		}, 40);

		const modalInstance = ModalUtils.open({
			...modalSettings,
            centered: true,
            windowClass: 'modal-alert',
			template: 'modal-alert.html',
			controller: 'ModalAlertCtrl',
			resolve: {
				options: () => (options || {})
			}
		});

		return modalInstance.result;
	};

    const handleSubmitImage = (image, withoutState) => {
        $rootScope.globalLoading = true;

        if (localStorage.getItem('search_image')) {
            localStorage.removeItem('search_image');
        }

        localStorage.setItem('search_image', image);
        
        return EventFileService.search({ image, event_key: window.__env.eventKey }).then(res => {
            $rootScope.personalGalleryInfo = {
                mainImage: image,
                requestData: _.get(res, 'data.data')
            };

            if (!withoutState) {
                $state.go('personal-gallery');
            }
        }).catch(() => {
            alert('Ocorreu um erro ao buscar sua imagem, tente novamente mais tarde.')
        }).finally(() => {
            $rootScope.globalLoading = false;
        })
    };

    const getFileNameFromUrl = (url = '') => {
		return url
			.replace(/\?AWSAccessKeyId=.*/, '')
			.substring(url.lastIndexOf('/') + 1);
	};

    const downloadPhoto = photo => {
        return fetch(photo.url).then(image => {
            return image.blob().then((imageBlog) => {
                const imageURL = URL.createObjectURL(imageBlog);
                const link = document.createElement('a');

                link.href = imageURL;
                link.download = getFileNameFromUrl(`${photo.url}&v=${Date.now()}`);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
        });
    };

	return {
        alertModal,
		isValidEmail,
        getShortName,
        downloadPhoto,
        handleSubmitImage
	};
});