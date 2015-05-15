var should = require('should'),
	BrM = require('../releases/br-masks');

describe('CPF/CNPJ', function(){
	it('should not mask empty values', function(done) {
		should(BrM.cpfCnpj(null)).be.eql(null);
		should(BrM.cpfCnpj(undefined)).be.eql(undefined);
		should(BrM.cpfCnpj('')).be.eql('');
		should(BrM.cpfCnpj(0)).be.eql(0);
		should(BrM.cpfCnpj(false)).be.eql(false);
		done();
	});

	it('should maks 10157471000161 to 10.157.471/0001-61', function(done) {
		should(BrM.cpfCnpj('10157471000161')).be.eql('10.157.471/0001-61');
		done();
	});
	it('should maks 54506158000167 to 54.506.158/0001-67', function(done) {
		should(BrM.cpfCnpj('54506158000167')).be.eql('54.506.158/0001-67');
		done();
	});
	it('should maks 79121383000106 to 79.121.383/0001-06', function(done) {
		should(BrM.cpfCnpj('79121383000106')).be.eql('79.121.383/0001-06');
		done();
	});
	it('should maks 12871891000134 to 12.871.891/0001-34', function(done) {
		should(BrM.cpfCnpj('12871891000134')).be.eql('12.871.891/0001-34');
		done();
	});
	it('should maks 01781192000120 to 01.781.192/0001-20', function(done) {
		should(BrM.cpfCnpj('01781192000120')).be.eql('01.781.192/0001-20');
		done();
	});

	// --- //

	it('should mask 97070868669 to 970.708.686-69', function(done) {
		should(BrM.cpfCnpj('97070868669')).be.eql('970.708.686-69');
		done();
	});
	it('should mask 21984171208 to 219.841.712-08', function(done) {
		should(BrM.cpfCnpj('21984171208')).be.eql('219.841.712-08');
		done();
	});
	it('should mask 24653511098 to 246.535.110-98', function(done) {
		should(BrM.cpfCnpj('24653511098')).be.eql('246.535.110-98');
		done();
	});
	it('should mask 24650512070 to 246.505.120-70', function(done) {
		should(BrM.cpfCnpj('24650512070')).be.eql('246.505.120-70');
		done();
	});
	it('should mask 14351512013 to 143.515.120-13', function(done) {
		should(BrM.cpfCnpj('14351512013')).be.eql('143.515.120-13');
		done();
	});
	it('should mask 143515 to 143.515', function(done) {
		should(BrM.cpfCnpj('1435151')).be.eql('143.515.1');
		done();
	});
});
