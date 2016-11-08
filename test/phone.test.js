var should = require('should'),
	BrM = require('../releases/br-masks');

describe('PHONE', function(){
	it('should not mask empty values', function(done) {
		should(BrM.phone(null)).be.eql(null);
		should(BrM.phone(undefined)).be.eql(undefined);
		should(BrM.phone('')).be.eql('');
		should(BrM.phone(0)).be.eql(0);
		should(BrM.phone(false)).be.eql(false);
		done();
	});
	it('should maks 3133340167 to (31) 3334-0167', function(done) {
		should(BrM.phone('3133340167')).be.eql('(31) 3334-0167');
		done();
	});
	it('should maks 38212201255 to (38) 21220-1255', function(done) {
		should(BrM.phone('38212201255')).be.eql('(38) 21220-1255');
		done();
	});
	it('should maks 08001234567 to 0800-123-4567', function(done) {
		should(BrM.phone('08001234567')).be.eql('0800-123-4567');
		done();
	});
});
