var should = require('should'),
	BrM = require('../releases/br-masks');

describe('CNPJ Base', function(){
	it('should not mask empty values', function(done) {
		should(BrM.cnpjBase(null)).be.eql(null);
		should(BrM.cnpjBase(undefined)).be.eql(undefined);
		should(BrM.cnpjBase('')).be.eql('');
		should(BrM.cnpjBase(0)).be.eql(0);
		should(BrM.cnpjBase(false)).be.eql(false);
		done();
	});

	it('should maks 10157471 to 10.157.471', function(done) {
		should(BrM.cnpjBase('10157471')).be.eql('10.157.471');
		done();
	});
	it('should maks 54506158 to 54.506.158', function(done) {
		should(BrM.cnpjBase('54506158')).be.eql('54.506.158');
		done();
	});
	it('should maks 79121383 to 79.121.383', function(done) {
		should(BrM.cnpjBase('79121383')).be.eql('79.121.383');
		done();
	});
	it('should maks 12871891 to 12.871.891', function(done) {
		should(BrM.cnpjBase('12871891')).be.eql('12.871.891');
		done();
	});
	it('should maks 01781192 to 01.781.192', function(done) {
		should(BrM.cnpjBase('01781192')).be.eql('01.781.192');
		done();
	});
});
