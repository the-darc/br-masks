/*exported CNPJBASE */
var CNPJBASE = function(value) {
	if(!value) {
		return value;
	}
	var cnpjBasePattern = new StringMask('00.000.000');
	var formatedValue = cnpjBasePattern.apply(value.replace(/\D/g, ''));
	return formatedValue;
};
