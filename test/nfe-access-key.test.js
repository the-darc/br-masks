var should = require('should'),
	BrM = require('../releases/br-masks');

describe('NFE ACCESS KEY', function(){
	it('should not mask empty values', function(done) {
		should(BrM.nfeAccessKey(null)).be.eql(null);
		should(BrM.nfeAccessKey(undefined)).be.eql(undefined);
		should(BrM.nfeAccessKey('')).be.eql('');
		should(BrM.nfeAccessKey(0)).be.eql(0);
		should(BrM.nfeAccessKey(false)).be.eql(false);
		done();
	});

	var nfes = [{
		key: '35140111724258000157550010006882191630386000',
		expected: '3514 0111 7242 5800 0157 5500 1000 6882 1916 3038 6000'
	},{
		key: '35131105827094000867550010011845921014997330',
		expected: '3513 1105 8270 9400 0867 5500 1001 1845 9210 1499 7330'
	},{
		key: '35140100776574000741550010253751881713008970',
		expected: '3514 0100 7765 7400 0741 5500 1025 3751 8817 1300 8970'
	},{
		key: '31130803420926007994550020000778901926162951',
		expected: '3113 0803 4209 2600 7994 5500 2000 0778 9019 2616 2951'
	},{
		key: '35130161365284015136550140061338751137432219',
		expected: '3513 0161 3652 8401 5136 5501 4006 1338 7511 3743 2219'
	}];

	for (var i = 0; i < nfes.length; i ++) {
		var nak = nfes[i];
		it('should mask nfe access key '+nak.key, function(done) {
			should(BrM.nfeAccessKey(nak.key)).be.eql(nak.expected);
			done();
		});
	}
});
