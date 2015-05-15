var should = require('should'),
	BrM = require('../releases/br-masks');

describe('I.E. ', function() {
	it('should not mask empty values', function(done) {
		should(BrM.ie(null)).be.eql(null);
		should(BrM.ie(undefined)).be.eql(undefined);
		should(BrM.ie('')).be.eql('');
		should(BrM.ie(0)).be.eql(0);
		should(BrM.ie(false)).be.eql(false);
		done();
	});

	it('should not mask invalid UFs', function(done) {
		should(BrM.ie('032141840', null)).be.eql('032141840');
		should(BrM.ie('18100100000059', 'XX')).be.eql('18100100000059');
		done();
	});

	describe('I.E.: Group01', function() {
		describe('- PE', function() {
			var uf = 'PE';
			it('Shoud mask 0321418-40', function(done) {
				should(BrM.ie('032141840', uf)).be.eql('0321418-40');
				done();
			});
			it('should mask 1321418-40', function(done) {
				should(BrM.ie('132141840', uf)).be.eql('1321418-40');
				done();
			});
			it('Shoud mask 18.1.001.0000004-9', function(done) {
				should(BrM.ie('18100100000049', uf)).be.eql('18.1.001.0000004-9');
				done();
			});
			it('should mask 18.1.001.0000005-9', function(done) {
				should(BrM.ie('18100100000059', uf)).be.eql('18.1.001.0000005-9');
				done();
			});
			it('should not mask numbers values', function(done) {
				should(BrM.ie(032141840, uf)).be.eql(32141840);
				done();
			});
		});
		describe('- RS', function() {
			var uf = 'RS';
			it('Shoud mask 224/3658792', function(done) {
				should(BrM.ie('2243658792', uf)).be.eql('224/3658792');
				done();
			});
			it('should mask 224/4658792', function(done) {
				should(BrM.ie('2244658792', uf)).be.eql('224/4658792');
				done();
			});
		});
		describe('- AC', function() {
			var uf = 'AC';
			it('Shoud mask 01.004.823/001-12', function(done) {
				should(BrM.ie('0100482300112', uf)).be.eql('01.004.823/001-12');
				done();
			});
			it('should mask 01.004.923/201-12', function(done) {
				should(BrM.ie('0100492320112', uf)).be.eql('01.004.923/201-12');
				done();
			});
			it('should mask 02.004.923/201-55', function(done) {
				should(BrM.ie('0200492320155', uf)).be.eql('02.004.923/201-55');
				done();
			});
		});
		describe('- MG', function() {
			var uf = 'MG';
			it('Shoud mask 062.307.904/0081', function(done) {
				should(BrM.ie('0623079040081', uf)).be.eql('062.307.904/0081');
				done();
			});
			it('should mask 062.347.934/0081', function(done) {
				should(BrM.ie('0623479340081', uf)).be.eql('062.347.934/0081');
				done();
			});
		});
		describe('- SP', function() {
			var uf = 'SP';
			it('Shoud mask 110.042.490.114', function(done) {
				should(BrM.ie('110042490114', uf)).be.eql('110.042.490.114');
				done();
			});
			it('should mask 110.045.490.124', function(done) {
				should(BrM.ie('110045490124', uf)).be.eql('110.045.490.124');
				done();
			});
			it('should mask 011.004.243.002', function(done) {
				should(BrM.ie('011004243002', uf)).be.eql('011.004.243.002');
				done();
			});
			it('Shoud mask P-01100424.3/002', function(done) {
				should(BrM.ie('P011004243002', uf)).be.eql('P-01100424.3/002');
				done();
			});
			it('should mask P-358874770.9/710', function(done) {
				should(BrM.ie('P358874779710', uf)).be.eql('P-35887477.9/710');
				done();
			});
			it('Shoud mask p-01100524.3/002', function(done) {
				should(BrM.ie('p011005240002', uf)).be.eql('P-01100524.0/002');
				done();
			});
		});
		describe('- DF', function() {
			var uf = 'DF';
			it('Shoud mask 07300001001-09', function(done) {
				should(BrM.ie('0730000100109', uf)).be.eql('07300001001-09');
				done();
			});
			it('should mask 07301002001-09', function(done) {
				should(BrM.ie('0730100200109', uf)).be.eql('07301002001-09');
				done();
			});
		});
		describe('- ES', function() {
			var uf = 'ES';
			it('Shoud mask 99999999-0', function(done) {
				should(BrM.ie('999999990', uf)).be.eql('99999999-0');
				done();
			});
			it('Shoud mask 19871230-8', function(done) {
				should(BrM.ie('198712308', uf)).be.eql('19871230-8');
				done();
			});
			it('should mask 99912999-0', function(done) {
				should(BrM.ie('999129990', uf)).be.eql('99912999-0');
				done();
			});
		});
		describe('- BA', function() {
			var uf = 'BA';
			describe('BA: 8 digits', function() {
				it('Shoud mask 090493-87', function(done) {
					should(BrM.ie('09049387', uf)).be.eql('090493-87');
					done();
				});
				it('Shoud mask 123456-63', function(done) {
					should(BrM.ie('12345663', uf)).be.eql('123456-63');
					done();
				});
				it('Shoud mask 290493-30', function(done) {
					should(BrM.ie('29049303', uf)).be.eql('290493-03');
					done();
				});
				it('Shoud mask 390493-60', function(done) {
					should(BrM.ie('39049366', uf)).be.eql('390493-66');
					done();
				});
				it('Shoud mask 490493-29', function(done) {
					should(BrM.ie('49049329', uf)).be.eql('490493-29');
					done();
				});
				it('Shoud mask 590493-20', function(done) {
					should(BrM.ie('59049382', uf)).be.eql('590493-82');
					done();
				});
				it('Shoud mask 890493-10', function(done) {
					should(BrM.ie('89049361', uf)).be.eql('890493-61');
					done();
				});
				it('should mask 026456-63', function(done) {
					should(BrM.ie('02645663', uf)).be.eql('026456-63');
					done();
				});

				it('Shoud mask 612345-57', function(done) {
					should(BrM.ie('61234557', uf)).be.eql('612345-57');
					done();
				});
				it('Shoud mask 723024-69', function(done) {
					should(BrM.ie('72302469', uf)).be.eql('723024-69');
					done();
				});
				it('Shoud mask 923024-76', function(done) {
					should(BrM.ie('92302476', uf)).be.eql('923024-76');
					done();
				});
				it('should mask 602355-57', function(done) {
					should(BrM.ie('60235557', uf)).be.eql('602355-57');
					done();
				});
			});
			describe('BA: 9 digits', function() {
				it('Shoud mask 0629333-16', function(done) {
					should(BrM.ie('062933316', uf)).be.eql('0629333-16');
					done();
				});
				it('Shoud mask 1000003-06', function(done) {
					should(BrM.ie('100000306', uf)).be.eql('1000003-06');
					done();
				});
				it('Shoud mask 2190493-84', function(done) {
					should(BrM.ie('219049384', uf)).be.eql('2190493-84');
					done();
				});
				it('Shoud mask 3190493-56', function(done) {
					should(BrM.ie('319049356', uf)).be.eql('3190493-56');
					done();
				});
				it('Shoud mask 4190493-28', function(done) {
					should(BrM.ie('419049328', uf)).be.eql('4190493-28');
					done();
				});
				it('Shoud mask 5190493-00', function(done) {
					should(BrM.ie('519049390', uf)).be.eql('5190493-90');
					done();
				});
				it('Shoud mask 8190493-06', function(done) {
					should(BrM.ie('819049306', uf)).be.eql('8190493-06');
					done();
				});
				it('should mask 1010203-06', function(done) {
					should(BrM.ie('101020306', uf)).be.eql('1010203-06');
					done();
				});

				it('Shoud mask 6112345-05', function(done) {
					should(BrM.ie('611234535', uf)).be.eql('6112345-35');
					done();
				});
				it('Shoud mask 7123024-06', function(done) {
					should(BrM.ie('712302456', uf)).be.eql('7123024-56');
					done();
				});
				it('Shoud mask 9123024-90', function(done) {
					should(BrM.ie('912302490', uf)).be.eql('9123024-90');
					done();
				});
				it('should mask 6102355-57', function(done) {
					should(BrM.ie('610235557', uf)).be.eql('6102355-57');
					done();
				});
			});
		});
		describe('- AM', function() {
			var uf = 'AM';
			it('Shoud mask 99.999.999-0', function(done) {
				should(BrM.ie('999999990', uf)).be.eql('99.999.999-0');
				done();
			});
			it('Shoud mask 19.871.230-8', function(done) {
				should(BrM.ie('198712308', uf)).be.eql('19.871.230-8');
				done();
			});
			it('should mask 99.912.999-0', function(done) {
				should(BrM.ie('999129990', uf)).be.eql('99.912.999-0');
				done();
			});
		});
		describe('- RN', function() {
			var uf = 'RN';
			it('Shoud mask 20.040.040-1', function(done) {
				should(BrM.ie('200400401', uf)).be.eql('20.040.040-1');
				done();
			});
			it('should mask 20.042.140-1', function(done) {
				should(BrM.ie('200421401', uf)).be.eql('20.042.140-1');
				done();
			});
			it('Shoud mask 20.0.040.040-0', function(done) {
				should(BrM.ie('2000400400', uf)).be.eql('20.0.040.040-0');
				done();
			});
			it('Shoud mask 20.0.340.040-0', function(done) {
				should(BrM.ie('2003400400', uf)).be.eql('20.0.340.040-0');
				done();
			});
			it('should mask 20.0.341.140-0', function(done) {
				should(BrM.ie('2003411400', uf)).be.eql('20.0.341.140-0');
				done();
			});
		});
		describe('- RO', function() {
			var uf = 'RO';
			it('Shoud mask 0000000062521-3', function(done) {
				should(BrM.ie('00000000625213', uf)).be.eql('0000000062521-3');
				done();
			});
			it('Shoud mask 0601230662521-7', function(done) {
				should(BrM.ie('06012306625217', uf)).be.eql('0601230662521-7');
				done();
			});
			it('should mask 0601230662521-3', function(done) {
				should(BrM.ie('06012306625213', uf)).be.eql('0601230662521-3');
				done();
			});
		});
		describe('- PR', function() {
			var uf = 'PR';
			it('Shoud mask 123.45678-50', function(done) {
				should(BrM.ie('1234567850', uf)).be.eql('123.45678-50');
				done();
			});
			it('Shoud mask 153.07274-47', function(done) {
				should(BrM.ie('1530727447', uf)).be.eql('153.07274-47');
				done();
			});
			it('should mask 153.07274-50', function(done) {
				should(BrM.ie('1530727450', uf)).be.eql('153.07274-50');
				done();
			});
		});
	});
	describe('I.E.: Group02', function() {
		describe('- SC', function() {
			var uf = 'SC';
			it('Shoud mask 251.040.852', function(done) {
				should(BrM.ie('251040852', uf)).be.eql('251.040.852');
				done();
			});
			it('Shoud mask 251.341.852', function(done) {
				should(BrM.ie('251341852', uf)).be.eql('251.341.852');
				done();
			});
			it('should mask 251.321.852', function(done) {
				should(BrM.ie('251321852', uf)).be.eql('251.321.852');
				done();
			});
		});
		describe('- RJ', function() {
			var uf = 'RJ';
			it('Shoud mask 99.999.99-3', function(done) {
				should(BrM.ie('99999993', uf)).be.eql('99.999.99-3');
				done();
			});
			it('Shoud mask 40.732.12-8', function(done) {
				should(BrM.ie('40732128', uf)).be.eql('40.732.12-8');
				done();
			});
			it('should mask 40.732.12-3', function(done) {
				should(BrM.ie('40732123', uf)).be.eql('40.732.12-3');
				done();
			});
		});
		describe('- PA', function() {
			var uf = 'PA';
			it('Shoud mask 15-999999-5', function(done) {
				should(BrM.ie('159999995', uf)).be.eql('15-999999-5');
				done();
			});
			it('Shoud mask 15-740351-3', function(done) {
				should(BrM.ie('157403513', uf)).be.eql('15-740351-3');
				done();
			});
			it('should mask 15-740351-5', function(done) {
				should(BrM.ie('157403515', uf)).be.eql('15-740351-5');
				done();
			});
			it('should mask 14-740351-0', function(done) {
				should(BrM.ie('147403510', uf)).be.eql('14-740351-0');
				done();
			});
		});
		describe('- SE', function() {
			var uf = 'SE';
			it('Shoud mask 27123456-3', function(done) {
				should(BrM.ie('271234563', uf)).be.eql('27123456-3');
				done();
			});
			it('should mask 15740351-5', function(done) {
				should(BrM.ie('157403515', uf)).be.eql('15740351-5');
				done();
			});
		});
		describe('- PB', function() {
			var uf = 'PB';
			it('Shoud mask 06000001-5', function(done) {
				should(BrM.ie('060000015', uf)).be.eql('06000001-5');
				done();
			});
			it('should mask 15740351-5', function(done) {
				should(BrM.ie('157403515', uf)).be.eql('15740351-5');
				done();
			});
		});
		describe('- CE', function() {
			var uf = 'CE';
			it('Shoud mask 06000001-5', function(done) {
				should(BrM.ie('060000015', uf)).be.eql('06000001-5');
				done();
			});
			it('should mask 15740351-5', function(done) {
				should(BrM.ie('157403515', uf)).be.eql('15740351-5');
				done();
			});
		});
		describe('- PI', function() {
			var uf = 'PI';
			it('Shoud mask 012345679', function(done) {
				should(BrM.ie('012345679', uf)).be.eql('012345679');
				done();
			});
			it('Shoud mask 060000015', function(done) {
				should(BrM.ie('060000015', uf)).be.eql('060000015');
				done();
			});
			it('Shoud mask 147403510', function(done) {
				should(BrM.ie('147403510', uf)).be.eql('147403510');
				done();
			});
			it('should mask 157403515', function(done) {
				should(BrM.ie('157403515', uf)).be.eql('157403515');
				done();
			});
		});
		describe('- MA', function() {
			var uf = 'MA';
			it('Shoud mask 120000385', function(done) {
				should(BrM.ie('120000385', uf)).be.eql('120000385');
				done();
			});
			it('should mask 060000015', function(done) {
				should(BrM.ie('060000015', uf)).be.eql('060000015');
				done();
			});
			it('should mask 127403510', function(done) {
				should(BrM.ie('127403510', uf)).be.eql('127403510');
				done();
			});
			it('Shoud mask 127403515', function(done) {
				should(BrM.ie('127403515', uf)).be.eql('127403515');
				done();
			});
		});
		describe('- MT', function() {
			var uf = 'MT';
			it('Shoud mask 0013000001-9', function(done) {
				should(BrM.ie('00130000019', uf)).be.eql('0013000001-9');
				done();
			});
			it('Shoud mask 0013046011-7', function(done) {
				should(BrM.ie('00130460117', uf)).be.eql('0013046011-7');
				done();
			});
			it('should mask 0013046011-9', function(done) {
				should(BrM.ie('00130460119', uf)).be.eql('0013046011-9');
				done();
			});
		});
		describe('- MS', function() {
			var uf = 'MS';
			it('Shoud mask 285730383', function(done) {
				should(BrM.ie('280000383', uf)).be.eql('280000383');
				done();
			});
			it('should mask 127403515', function(done) {
				should(BrM.ie('127403515', uf)).be.eql('127403515');
				done();
			});
			it('should mask 280000015', function(done) {
				should(BrM.ie('280000015', uf)).be.eql('280000015');
				done();
			});
		});
		describe('- TO', function() {
			var uf = 'TO';
			it('Shoud mask 29010227836', function(done) {
				should(BrM.ie('29010227836', uf)).be.eql('29010227836');
				done();
			});
			it('should mask 29010237336', function(done) {
				should(BrM.ie('29010237336', uf)).be.eql('29010237336');
				done();
			});
			it('should mask 29090227836', function(done) {
				should(BrM.ie('29090227836', uf)).be.eql('29090227836');
				done();
			});
		});
		describe('- AL', function() {
			var uf = 'AL';
			it('Shoud mask 240000048', function(done) {
				should(BrM.ie('240000048', uf)).be.eql('240000048');
				done();
			});
			it('Shoud mask 240273044', function(done) {
				should(BrM.ie('240273044', uf)).be.eql('240273044');
				done();
			});
			it('should mask 241178045', function(done) {
				should(BrM.ie('241178045', uf)).be.eql('241178045');
				done();
			});
			it('should mask 213178044', function(done) {
				should(BrM.ie('213178044', uf)).be.eql('213178044');
				done();
			});
			it('should mask 240178040', function(done) {
				should(BrM.ie('240178040', uf)).be.eql('240178040');
				done();
			});
		});
		describe('- RR', function() {
			var uf = 'RR';
			it('Shoud mask 24006628-1', function(done) {
				should(BrM.ie('240066281', uf)).be.eql('24006628-1');
				done();
			});
			it('Shoud mask 24001755-6', function(done) {
				should(BrM.ie('240017556', uf)).be.eql('24001755-6');
				done();
			});
			it('Shoud mask 24003429-0', function(done) {
				should(BrM.ie('240034290', uf)).be.eql('24003429-0');
				done();
			});
			it('Shoud mask 24001360-3', function(done) {
				should(BrM.ie('240013603', uf)).be.eql('24001360-3');
				done();
			});
			it('Shoud mask 24008266-8', function(done) {
				should(BrM.ie('240082668', uf)).be.eql('24008266-8');
				done();
			});
			it('should mask 24002676-8', function(done) {
				should(BrM.ie('240026768', uf)).be.eql('24002676-8');
				done();
			});
		});
		describe('- GO', function() {
			var uf = 'GO';
			it('Shoud mask 10.987.654-7', function(done) {
				should(BrM.ie('109876547', uf)).be.eql('10.987.654-7');
				done();
			});
			it('Shoud mask 11.094.402-0', function(done) {
				should(BrM.ie('110944020', uf)).be.eql('11.094.402-0');
				done();
			});
			it('Shoud mask 10.115.996-1', function(done) {
				should(BrM.ie('101159961', uf)).be.eql('10.115.996-1');
				done();
			});
			it('Shoud mask 10.113.995-0', function(done) {
				should(BrM.ie('101139950', uf)).be.eql('10.113.995-0');
				done();
			});
			it('should mask 10.957.654-7', function(done) {
				should(BrM.ie('109576547', uf)).be.eql('10.957.654-7');
				done();
			});
		});
		describe('- AP', function() {
			var uf = 'AP';
			it('Shoud mask 030123459', function(done) {
				should(BrM.ie('030123459', uf)).be.eql('030123459');
				done();
			});
			it('Shoud mask 030183458', function(done) {
				should(BrM.ie('030183458', uf)).be.eql('030183458');
				done();
			});
			it('Shoud mask 030173452', function(done) {
				should(BrM.ie('030173452', uf)).be.eql('030173452');
				done();
			});
			it('Shoud mask 030153455', function(done) {
				should(BrM.ie('030153455', uf)).be.eql('030153455');
				done();
			});
			it('Shoud mask 030193451', function(done) {
				should(BrM.ie('030193451', uf)).be.eql('030193451');
				done();
			});
			it('Shoud mask 030223458', function(done) {
				should(BrM.ie('030223458', uf)).be.eql('030223458');
				done();
			});
			it('Shoud mask 037123459', function(done) {
				should(BrM.ie('037123459', uf)).be.eql('037123459');
				done();
			});
			it('should mask 031123459', function(done) {
				should(BrM.ie('031123459', uf)).be.eql('031123459');
				done();
			});
		});
	});
});
