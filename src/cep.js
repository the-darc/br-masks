if (typeof require === 'function') {
	var StringMask = require('string-mask');
}

var CEP = function(value) {
	var cepMask = new StringMask('00000-000');
	if(!value) {
		return value;
	}
	var processed = cepMask.process(value);
	return processed.result;
};
