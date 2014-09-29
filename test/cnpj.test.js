var should = require('should'),
	BrM = require('../releases/br-masks.min');

describe('CNPJ', function(){
	it('should maks 10157471000161 to 10.157.471/0001-61', function(done) {
		should(BrM.cnpj('10157471000161')).be.eql('10.157.471/0001-61');
		done();
	});
	it('should maks 54506158000167 to 54.506.158/0001-67', function(done) {
		should(BrM.cnpj('54506158000167')).be.eql('54.506.158/0001-67');
		done();
	});
	it('should maks 79121383000106 to 79.121.383/0001-06', function(done) {
		should(BrM.cnpj('79121383000106')).be.eql('79.121.383/0001-06');
		done();
	});
	it('should maks 12871891000134 to 12.871.891/0001-34', function(done) {
		should(BrM.cnpj('12871891000134')).be.eql('12.871.891/0001-34');
		done();
	});
	it('should maks 01781192000120 to 01.781.192/0001-20', function(done) {
		should(BrM.cnpj('01781192000120')).be.eql('01.781.192/0001-20');
		done();
	});
});
