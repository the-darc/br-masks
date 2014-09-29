var should = require('should'),
	BrM = require('../releases/br-masks.min');

describe('CEP', function(){
	it('should maks 30480530 to 30480-530', function(done) {
		should(BrM.cep('30480530')).be.eql('30480-530');
		done();
	});
});
