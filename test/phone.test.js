var should = require('should'),
	BrM = require('../releases/br-masks.min');

describe('PHONE', function(){
	it('should maks 3133340167 to (31) 3334-0167', function(done) {
		should(BrM.phone('3133340167')).be.eql('(31) 3334-0167');
		done();
	});
	it('should maks 38212201255 to (38) 21220-1255', function(done) {
		should(BrM.phone('38212201255')).be.eql('(38) 21220-1255');
		done();
	});
});
