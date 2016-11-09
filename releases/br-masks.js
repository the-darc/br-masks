/**
 * br-masks
 * A library of masks applicable to several Brazilian data like I.E., CNPJ, CPF and others
 * @version v0.5.0
 * @link http://github.com/the-darc/br-masks
 * @license MIT
 */
(function (root, factory) {
   /* istanbul ignore next */
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['string-mask'], factory);
	} else if (typeof exports === 'object') {
		// Node. Does not work with strict CommonJS, but
		// only CommonJS-like environments that support module.exports,
		// like Node.
		module.exports = factory(require('string-mask'));
	} else {
		// Browser globals (root is window)
		root.BrM = factory(root.StringMask);
	}
}(this, function (StringMask) {
   /* istanbul ignore if */
	if (!StringMask) {
		throw new Error('StringMask not found');
	}
/*exported CEP */
var CEP = function(value) {
	var cepMask = new StringMask('00000-000');
	if(!value) {
		return value;
	}
	var processed = cepMask.process(value);
	return processed.result;
};

/*exported CNPJBASE */
var CNPJBASE = function(value) {
	if(!value) {
		return value;
	}
	var cnpjBasePattern = new StringMask('00.000.000');
	var formatedValue = cnpjBasePattern.apply(value);
	return formatedValue;
};

/*exported CNPJ */
var CNPJ = function(value) {
	if(!value) {
		return value;
	}
	var cnpjPattern = new StringMask('00.000.000\/0000-00');
	var formatedValue = cnpjPattern.apply(value);
	return formatedValue;
};

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

/*exported CPF */
var CPF = function(value) {
	var cpfPattern = new StringMask('000.000.000-00');
	if(!value) {
		return value;
	}
	var formatedValue = cpfPattern.apply(value);
	return formatedValue;
};

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

/*exported IE */
var IE = function(value, uf) {
	if (!value || typeof value !== 'string') {
		return value;
	}

	var ieMasks = {
		'AC': [{mask: new StringMask('00.000.000/000-00')}],
		'AL': [{mask: new StringMask('000000000')}],
		'AM': [{mask: new StringMask('00.000.000-0')}],
		'AP': [{mask: new StringMask('000000000')}],
		'BA': [{chars: 8, mask: new StringMask('000000-00')},
			   {mask: new StringMask('0000000-00')}],
		'CE': [{mask: new StringMask('00000000-0')}],
		'DF': [{mask: new StringMask('00000000000-00')}],
		'ES': [{mask: new StringMask('00000000-0')}],
		'GO': [{mask: new StringMask('00.000.000-0')}],
		'MA': [{mask: new StringMask('000000000')}],
		'MG': [{mask: new StringMask('000.000.000/0000')}],
		'MS': [{mask: new StringMask('000000000')}],
		'MT': [{mask: new StringMask('0000000000-0')}],
		'PA': [{mask: new StringMask('00-000000-0')}],
		'PB': [{mask: new StringMask('00000000-0')}],
		'PE': [{chars: 9, mask: new StringMask('0000000-00')},
			   {mask: new StringMask('00.0.000.0000000-0')}],
		'PI': [{mask: new StringMask('000000000')}],
		'PR': [{mask: new StringMask('000.00000-00')}],
		'RJ': [{mask: new StringMask('00.000.00-0')}],
		'RN': [{chars: 9, mask: new StringMask('00.000.000-0')},
			   {mask: new StringMask('00.0.000.000-0')}],
		'RO': [{mask: new StringMask('0000000000000-0')}],
		'RR': [{mask: new StringMask('00000000-0')}],
		'RS': [{mask: new StringMask('000/0000000')}],
		'SC': [{mask: new StringMask('000.000.000')}],
		'SE': [{mask: new StringMask('00000000-0')}],
		'SP': [{mask: new StringMask('000.000.000.000')},
			   {mask: new StringMask('-00000000.0/000')}],
		'TO': [{mask: new StringMask('00000000000')}]
	};

	function clearValue (value) {
		return value.replace(/[^0-9]/g, '');
	}

	function getMask(uf, value) {
		if(!uf || !ieMasks[uf]) {
			return undefined;
		}
		var _uf = uf.toUpperCase();
		if (_uf === 'SP' && /^P/i.test(value)) {
			return ieMasks.SP[1].mask;
		}
		var masks = ieMasks[uf];
		var i = 0;
		while(masks[i].chars && masks[i].chars < clearValue(value).length && i < masks.length - 1) {
			i++;
		}
		return masks[i].mask;
	}

	var mask = getMask(uf, value);
	if(!mask) {
		return value;
	}
	var processed = mask.process(clearValue(value));
	if (uf && uf.toUpperCase() === 'SP' && /^p/i.test(value)) {
		return 'P'+processed.result;
	}
	return processed.result;
};

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

	return {
		ie: IE,
		cpf: CPF,
		cnpj: CNPJ,
       cnpjBase: CNPJBASE,
		phone: PHONE,
		cep: CEP,
		finance: FINANCE,
		nfeAccessKey: NFEACCESSKEY,
		cpfCnpj: CPFCNPJ
	};
}));