[![npm version](https://badge.fury.io/js/br-masks.svg)](http://badge.fury.io/js/br-masks)
[![Build Status](https://travis-ci.org/the-darc/br-masks.svg?branch=master)](https://travis-ci.org/the-darc/br-masks)


# br-masks #

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
	var isValid = BrM.cpf(cpf); 
	// masked should be '970.708.686-69'
```

### CNPJ ###

```javascript
	var BrM = require('br-masks');
	var cnpj = '79121383000106';
	var isValid = BrM.cnpj(cnpj);
	// masked should be '79.121.383/0001-06'
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
```
