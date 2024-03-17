evenPicServices.factory('CurrencyUtils', function() {
	const divide = ({ value, divider, precision = 2}) => {
		return currency(value, { precision: precision }).divide(divider).value;
	};

	const multiply = ({ value, splits, precision = 2 }) => {
		return currency(value, { precision: precision }).multiply(splits).value;
	};

	const add = ({ value, add_value, precision = 2 }) => {
		return currency(value, { precision: precision }).add(add_value).value;
	};

	const subtract = ({ value, subtract_value, precision = 2 }) => {
		return currency(value, { precision: precision }).subtract(subtract_value).value;
	};

	const format = (value) => {
		return currency(value).value;
	};

	return {
		divide,
		multiply,
		subtract,
		add,
		format
	};
});
