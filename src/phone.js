if (typeof require === 'function') {
	var StringMask = require('string-mask');
}

var PHONE = function(value) {
	var phoneMask8D = new StringMask('(00) 0000-0000'),
		phoneMask9D = new StringMask('(00) 00000-0000');

	if(!value) {
		return value;
	}

	var formatedValue;
	if(value.length < 11){
		formatedValue = phoneMask8D.apply(value);
	}else{
		formatedValue = phoneMask9D.apply(value);
	}

	return formatedValue;
};
