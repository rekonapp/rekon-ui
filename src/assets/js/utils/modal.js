evenPicServices.service("ModalUtils", function ($uibModal) {
    const setShowValues = () => {
        setTimeout(() => {
            jQuery('.modal-backdrop').addClass('show').ready(jQuery('.modal').addClass('show'));
        }, 100);
    };

    const setHideValues = () => {
        setTimeout(() => {
            jQuery('.modal').removeClass('show').ready(jQuery('.modal-backdrop').removeClass('show'));
        }, 100);
    };

    const open = options => {
        const modalOptions = _.pick(options, ['keyboard', 'controller', 'resolve', 'backdrop']);

        const modalInstance = $uibModal.open({
            ...modalOptions,
            templateUrl: `src/views/${options.template}`,
            windowClass: `${options.centered ? `centered-modal ${options.windowClass}` : (options.windowClass || '')}`,
        });

        setShowValues();

        return modalInstance;
    };

    const dismiss = ({ instance }) => {
        setHideValues();

        instance.dismiss();
    };

    const close = ({ data, instance }) => {
        setHideValues();

        instance.close(data);
    };

	return {
        open,
        dismiss,
        close
	};
});