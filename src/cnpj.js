if (typeof require === 'function') {
	var StringMask = require('string-mask');
}

var CNPJ = function(value) {
	if(!value) {
		return value;
	}
	var cnpjPattern = new StringMask('00.000.000\/0000-00');
	var formatedValue = cnpjPattern.apply(value);
	return formatedValue;
};
