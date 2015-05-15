/*exported CPFCNPJ */
/*globals CPF, CNPJ*/
var CPFCNPJ = function(value) {
	if (!value || !value.length) {
		return value;
	} else if (value.length <= 11) {
		return CPF(value);
	} else {
		return CNPJ(value);
	}
};
