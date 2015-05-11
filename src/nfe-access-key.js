/*exported NFEACCESSKEY */
var NFEACCESSKEY = function(value) {
	if(!value) {
		return value;
	}

	var maskPattern = '0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000';
	var nfeMask = new StringMask(maskPattern);
	var formatedValue = nfeMask.apply(value);
	return formatedValue;
};
