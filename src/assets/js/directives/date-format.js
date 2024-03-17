evenPicServices.filter('amDateFormat', function() {
	return function(date, dateFormat) {
        return dayjs(date).format(dateFormat);
	};
});
