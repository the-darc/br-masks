/*exported FINANCE */
var FINANCE = function(value, precision, decimalSep, groupSep) {
	precision = (!precision && precision !== 0) || precision < 0? 2 : precision;
	decimalSep = decimalSep || '.';
	groupSep = groupSep || '';

	var decimalsPattern = precision > 0 ? decimalSep + new Array(precision + 1).join('0') : '';
	var maskPattern = '#'+groupSep+'##0'+decimalsPattern;

	value = parseFloat(value);
	if (!value) {
		value = 0;
	}

	var negative = false;
	if (value < 0) {
		value = value * -1;
		negative = true;
	}
	var financeMask = new StringMask(maskPattern, {reverse: true});
	var masked = financeMask.apply(value.toFixed(precision).replace(/[^\d]+/g,''));
	return negative ? '('+masked+')' : masked;
};
