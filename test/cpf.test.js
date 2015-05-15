var should = require('should'),
	BrM = require('../releases/br-masks');

describe('CPF ', function() {
	it('should not mask empty values', function(done) {
		should(BrM.cpf(null)).be.eql(null);
		should(BrM.cpf(undefined)).be.eql(undefined);
		should(BrM.cpf('')).be.eql('');
		should(BrM.cpf(0)).be.eql(0);
		should(BrM.cpf(false)).be.eql(false);
		done();
	});

	it('should mask 97070868669 to 970.708.686-69', function(done) {
		should(BrM.cpf('97070868669')).be.eql('970.708.686-69');
		done();
	});
	it('should mask 21984171208 to 219.841.712-08', function(done) {
		should(BrM.cpf('21984171208')).be.eql('219.841.712-08');
		done();
	});
	it('should mask 24653511098 to 246.535.110-98', function(done) {
		should(BrM.cpf('24653511098')).be.eql('246.535.110-98');
		done();
	});
	it('should mask 24650512070 to 246.505.120-70', function(done) {
		should(BrM.cpf('24650512070')).be.eql('246.505.120-70');
		done();
	});
	it('should mask 14351512013 to 143.515.120-13', function(done) {
		should(BrM.cpf('14351512013')).be.eql('143.515.120-13');
		done();
	});
	it('should mask 143515 to 143.515', function(done) {
		should(BrM.cpf('1435151')).be.eql('143.515.1');
		done();
	});
});
