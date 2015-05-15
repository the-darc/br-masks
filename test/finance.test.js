var should = require('should'),
	BrM = require('../releases/br-masks');

describe('FINANCE', function(){
	it('should maks 125 to 125.00', function(done) {
		should(BrM.finance('125')).be.eql('125.00');
		should(BrM.finance(125)).be.eql('125.00');
		done();
	});
	it('should maks -125 to (125.00)', function(done) {
		should(BrM.finance('-125')).be.eql('(125.00)');
		should(BrM.finance(-125)).be.eql('(125.00)');
		done();
	});
	it('should round numbers', function(done) {
		should(BrM.finance('1.1234')).be.eql('1.12');
		should(BrM.finance(1.1234)).be.eql('1.12');
		should(BrM.finance('-1.1234')).be.eql('(1.12)');
		should(BrM.finance(-1.1234)).be.eql('(1.12)');

		should(BrM.finance('1.1274')).be.eql('1.13');
		should(BrM.finance(1.1274)).be.eql('1.13');
		should(BrM.finance('-1.1274')).be.eql('(1.13)');
		should(BrM.finance(-1.1274)).be.eql('(1.13)');
		done();
	});
	it('should change precision', function(done) {
		should(BrM.finance('123.1237123', 3)).be.eql('123.124');
		should(BrM.finance(0.6234,0)).be.eql('1');
		should(BrM.finance(123555.6234,-1)).be.eql('123555.62');

		should(BrM.finance('-123.1237123', 3)).be.eql('(123.124)');
		should(BrM.finance(-0.6234,0)).be.eql('(1)');
		should(BrM.finance(-123555.6234,-1)).be.eql('(123555.62)');
		done();
	});
	it('should change separators', function(done) {
		should(BrM.finance('9123.1237123', 3, ',', '.')).be.eql('9.123,124');
		should(BrM.finance(0.6234,0, ',', '.')).be.eql('1');
		should(BrM.finance(87123555.6234,-1, ',', '.')).be.eql('87.123.555,62');

		should(BrM.finance('-9123.1237123', 3, ',', '.')).be.eql('(9.123,124)');
		should(BrM.finance(-0.6234,0, ',', '.')).be.eql('(1)');
		should(BrM.finance(-87123555.6234,-1, ',', '.')).be.eql('(87.123.555,62)');
		done();
	});
	it('should mask invalid numbers to 0.00', function(done) {
		should(BrM.finance('0')).be.eql('0.00');
		should(BrM.finance('-0')).be.eql('0.00');

		should(BrM.finance('')).be.eql('0.00');
		should(BrM.finance(undefined)).be.eql('0.00');
		should(BrM.finance(null)).be.eql('0.00');
		should(BrM.finance()).be.eql('0.00');

		should(BrM.finance('a')).be.eql('0.00');
		should(BrM.finance(' ')).be.eql('0.00');

		should(BrM.finance('123a')).be.eql('123.00');
		should(BrM.finance('123.a.1231')).be.eql('123.00');
		should(BrM.finance('1.1256a.1231')).be.eql('1.13');
		done();
	});
});
