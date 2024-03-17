evenPicServices.service("Utils", function (
    AlertMessage,
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

    const isInvalidMonthsDifference = ({ start_date, end_date }, diffPeriod) => {
		const diff = dayjs(end_date, 'DD/MM/YYYY').diff(dayjs(start_date, 'DD/MM/YYYY'), 'months', true);

		return diff > diffPeriod;
	};

	const hasAnyEmptyDateField = ({ start_date, end_date }) => {
		return !start_date || !end_date;
	};

	const isInvalidDateRange = ({ start_date, end_date }) => {
		return dayjs(start_date, 'DD/MM/YYYY').isAfter(dayjs(end_date, 'DD/MM/YYYY'));
	};

	const isValidStartAndEndDateFilterWithDiff = ({ start_date, end_date }, diffPeriod) => {
        const alertData = {
            title: 'Filtros inválidos!',
            status: 'warning'
        };

		if (hasAnyEmptyDateField({ start_date, end_date })) {
            alertData.subtitle = 'O período de data precisa estar preenchido.';

			AlertMessage.open(alertData);
			return false;
		}

		if (isInvalidDateRange({ start_date, end_date })) {
            alertData.subtitle = 'A data de início deve ser menor que a data final.';

			AlertMessage.open(alertData);
			return false;
		}

		if (isInvalidMonthsDifference({ start_date, end_date }, diffPeriod)) {
            alertData.subtitle = `O período máximo para pesquisa é de até ${diffPeriod} meses.`;

			AlertMessage.open(alertData);
			return false;
		}

		return true;
	};
	
	return {
        alertModal,
		isValidEmail,
        getShortName,
        isValidStartAndEndDateFilterWithDiff
	};
});