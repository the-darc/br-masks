/*exported PHONE */
var PHONE = function(value) {
	var phoneMask8D = new StringMask('(00) 0000-0000'),
		phoneMask9D = new StringMask('(00) 00000-0000'),
		phoneMask0800 = new StringMask('0000-000-0000');

	if(!value) {
		return value;
	}

	var formatedValue;
	value = value + '';
	if (value.indexOf('0800') === 0) {
			formatedValue = phoneMask0800.apply(value);
	}else if(value.length < 11){
		formatedValue = phoneMask8D.apply(value);
	}else{
		formatedValue = phoneMask9D.apply(value);
	}

	return formatedValue;
};
