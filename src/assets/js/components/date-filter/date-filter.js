evenPicServices.directive('dateFilter', function(
    $timeout
) {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            filter: '='
        },
        templateUrl: 'src/assets/js/components/date-filter/date-filter.html',
        link: function(scope) {
            const datePickerElements = {
                start_date: null,
                end_date: null
            };

            const dateFilterOptions = {
                language: 'pt-BR',
                todayHighlight: true,
                autoclose: true,
                orientation: 'auto',
                format: 'dd/mm/yyyy',
                toggleActive: false
            };

            const init = () => {
                setTimeout(() => {
                    initDatePicker('end_date');
                    initDatePicker('start_date');    
                }, 100)
            };

            const changeDate = (ngModel, options) => {
                const dateValue = options.dates && options.dates[0];

                if (!dateValue) {
                    scope.filter[ngModel] = null;
                    return
                }

                const dateDayJS = dayjs(dateValue);

                const isValidDate = dateDayJS.isValid();

                if (isValidDate) {
                    $timeout(() => {
                        scope.filter[ngModel] = dateDayJS.format('DD/MM/YYYY');
                    });
                }
			};

            const initDatePicker = ngModel => {
				const element = jQuery(`#datepicker-filter-${ngModel === 'start_date' ? 'start-date' : 'end-date'}`);

                datePickerElements[ngModel] = element.datepicker(dateFilterOptions);
                
                element.on('keyup', options => changeDate(ngModel, options));
                element.on('changeDate', options => changeDate(ngModel, options));
			};

            init();
        }
    };
});
