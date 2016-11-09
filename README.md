# br-masks #
[![npm version](https://badge.fury.io/js/br-masks.svg)](http://badge.fury.io/js/br-masks)
[![Bower version](https://badge.fury.io/bo/br-masks.svg)](http://badge.fury.io/bo/br-masks)
[![Build Status](https://travis-ci.org/the-darc/br-masks.svg?branch=master)](https://travis-ci.org/the-darc/br-masks)
[![Coverage Status](https://coveralls.io/repos/the-darc/br-masks/badge.svg?branch=master)](https://coveralls.io/r/the-darc/br-masks?branch=master)

A library of masks applicable to several Brazilian data like I.E., CNPJ, CPF and others

## Instalation ##

### With npm

```bash
    npm install --save br-masks
```

### With bower

```bash
    bower install --save br-masks
```

### Runing tests ###

```bash
	gulp test
```

## Validations ##

### Inscrição Estadual ###

```javascript
	var BrM = require('br-masks');
	var uf = 'SP';
	var ie = '110042490114';
	var masked = BrM.ie(ie, uf);
	// masked should be '110.042.490.114'
```
See: [Conferência de Inscrições Estaduais](http://www.sintegra.gov.br/insc_est.html)
 
### CPF ###

```javascript
	var BrM = require('br-masks');
	var cpf = '97070868669';
	var masked = BrM.cpf(cpf); 
	// masked should be '970.708.686-69'
```

### CNPJ ###

```javascript
	var BrM = require('br-masks');
	var cnpj = '79121383000106';
	var masked = BrM.cnpj(cnpj);
	// masked should be '79.121.383/0001-06'
```

### CPF/CNPJ ###

```javascript
	var BrM = require('br-masks');
	var maskedCpf = BrM.cpfCnpj('97070868669');
	// maskedCpf should be '970.708.686-69'
	var maskedCnpj = BrM.cpfCnpj('79121383000106');
	// maskedCnpj should be '79.121.383/0001-06'
```

### CEP ###

```javascript
	var BrM = require('br-masks');
	var cep = '30480530';
	var masked = BrM.cep(cep);
	// masked should be '30480-530'
```

### PHONE ###

```javascript
	var BrM = require('br-masks');
	var phone = '3133340167';
	var masked = BrM.phone(phone);
	// masked should be '(31) 3334-0167'

	var phone9 = '38212201255';
	var masked9 = BrM.phone(phone9);
	// masked9 should be '(38) 21220-1255'

	var phone0800 = '08001234567';
	var masked0800 = BrM.phone(phone0800);
	// masked0800 should be '0800-123-4567'
```

### FINANCE ###

```javascript
	var BrM = require('br-masks');
	var value = 125.1578;
	var masked = BrM.finance(value);
	// masked should be '125.16'

	var value2 = -125.1578;
	var masked2 = BrM.finance(value2);
	// masked2 should be '(125.16)'
```
See [finance.test.js](https://github.com/the-darc/br-masks/blob/master/test/finance.test.js) for more examples.

### NFE ACCESS KEY ###

```javascript
	var BrM = require('br-masks');
	var value = '35130161365284015136550140061338751137432219';
	var masked = BrM.nfeAccessKey(value);
	// masked should be '3513 0161 3652 8401 5136 5501 4006 1338 7511 3743 2219'
```
