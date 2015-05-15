var should = require('should'),
	BrM = require('../releases/br-masks');

describe('CEP', function(){
	it('should not mask empty values', function(done) {
		should(BrM.cep(null)).be.eql(null);
		should(BrM.cep(undefined)).be.eql(undefined);
		should(BrM.cep('')).be.eql('');
		should(BrM.cep(0)).be.eql(0);
		should(BrM.cep(false)).be.eql(false);
		done();
	});

	it('should maks 30480530 to 30480-530', function(done) {
		should(BrM.cep('30480530')).be.eql('30480-530');
		done();
	});
});
