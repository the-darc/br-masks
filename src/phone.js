/*exported PHONE */
var PHONE = function(value) {
	 var formatedValue;
	var phoneMask8D = {
        areaCode: new StringMask('(00) 0000-0000'),     // with area code
        simple: new StringMask('0000-0000')             // without area code
    }, phoneMask9D = {
        areaCode: new StringMask('(00) 00000-0000'),    // with area code
        simple: new StringMask('00000-0000')            // without area code
    }, phoneMask0800 = {
        areaCode: null,                                 // N/A
        simple: new StringMask('0000-000-0000')         // N/A, so it's "simple"
    };

    if(!value) {
        return value;
    }

    value = value + '';

    if (value.indexOf('0800') === 0) {
        formattedValue = phoneMask0800.simple.apply(value);
    } else if (value.length < 9) {
        formattedValue = phoneMask8D.simple.apply(value) || '';
    } else if (value.length < 10) {
        formattedValue = phoneMask9D.simple.apply(value);
    } else if (value.length < 11) {
        formattedValue = phoneMask8D.areaCode.apply(value);
    } else {
        formattedValue = phoneMask9D.areaCode.apply(value);
    }

    return formattedValue.trim().replace(/[^0-9]$/, '');
};
