var gulp = require('gulp'),
	path = require('path'),
	jshintReporter = require('jshint-stylish'),
	plugins = require('gulp-load-plugins')({
		config: path.join(__dirname, 'package.json')
	}),
	pkg = require('./package.json'),
	fs = require('fs');

var config = {
	src: {
		files: 'src/**/*.js',
		release: 'releases/br-masks.js'
	},
	test: {
		files: 'test/**/*.test.js'
	}
};

var header = ['/**',
	' * <%= pkg.name %>',
	' * <%= pkg.description %>',
	' * @version v<%= pkg.version %>',
	' * @link <%= pkg.homepage %>',
	' * @license <%= pkg.license %>',
	' */',
	'(function (root, factory) {',
	'   /* istanbul ignore next */',
	'	if (typeof define === \'function\' && define.amd) {',
	'		// AMD. Register as an anonymous module.',
	'		define([\'string-mask\'], factory);',
	'	} else if (typeof exports === \'object\') {',
	'		// Node. Does not work with strict CommonJS, but',
	'		// only CommonJS-like environments that support module.exports,',
	'		// like Node.',
	'		module.exports = factory(require(\'string-mask\'));',
	'	} else {',
	'		// Browser globals (root is window)',
	'		root.BrM = factory(root.StringMask);',
	'	}',
	'}(this, function (StringMask) {',
	'   /* istanbul ignore if */',
	'	if (!StringMask) {',
	'		throw new Error(\'StringMask not found\');',
	'	}',
	''].join('\n');

var footer = ['',
	'	return {',
	'		ie: IE,',
	'		cpf: CPF,',
	'		cnpj: CNPJ,',
	'       cnpjBase: CNPJBASE,',
	'		phone: PHONE,',
	'		cep: CEP,',
	'		finance: FINANCE,',
	'		nfeAccessKey: NFEACCESSKEY,',
	'		cpfCnpj: CPFCNPJ',
	'	};',
	'}));'].join('\n');

gulp.task('build:lib', function() {
	return gulp.src([
		config.src.files
	])
		.pipe(plugins.concat('br-masks.js'))
		.pipe(plugins.header(header, {pkg: pkg}))
		.pipe(plugins.footer(footer))
		.pipe(gulp.dest('./releases'))
		.pipe(plugins.uglify())
		.pipe(plugins.concat('br-masks.min.js'))
		.pipe(gulp.dest('./releases'));
});

gulp.task('build:standalone', ['build:lib'], function() {
	return gulp.src([
		'bower_components/string-mask/src/string-mask.js',
		'releases/br-masks.js'
	])
		.pipe(plugins.concat('br-masks-standalone.js'))
		.pipe(gulp.dest('./releases'))
		.pipe(plugins.uglify())
		.pipe(plugins.concat('br-masks-standalone.min.js'))
		.pipe(gulp.dest('./releases'));
});

gulp.task('build', ['build:standalone']);

gulp.task('jshint', function(done) {
	gulp.src(config.src.files)
	.pipe(plugins.jshint('.jshintrc'))
	.pipe(plugins.jshint.reporter(jshintReporter));
	done();
});

function mochaRunnerFactory(reporter) {
	return plugins.mocha({
		reporter: reporter || 'spec'
	});
}

gulp.task('runtestdot', ['jshint', 'build'], function() {
	gulp.src(config.test.files, {read: false})
	.pipe(mochaRunnerFactory('dot'))
	.on('error', console.warn.bind(console));
});

gulp.task('runtest', ['jshint', 'build'], function() {
	gulp.src(config.test.files, {read: false})
	.pipe(mochaRunnerFactory())
	.on('error', console.warn.bind(console));
});

gulp.task('default', ['jshint', 'build', 'runtestdot'], function() {
	gulp.watch(config.src.files, ['jshint', 'build', 'runtestdot']);
});

gulp.task('test', ['jshint', 'build', 'runtest']);

gulp.task('test-watch', ['jshint', 'build', 'runtest'], function() {
	gulp.watch(config.src.files, ['jshint', 'build', 'runtest']);
});

gulp.task('test-coverage', function(done) {
	gulp.src(config.src.release)
	.pipe(plugins.istanbul())
	.pipe(plugins.istanbul.hookRequire())
	.on('finish', function() {
		gulp.src(config.test.files, {
			cwd: process.env.PWD,
			read: false
		})
		.pipe(mochaRunnerFactory('spec'))
		.pipe(plugins.istanbul.writeReports())
		.on('end', function() {
			if (process.env.TRAVIS) {
				gulp.src('./coverage/**/lcov.info')
				.pipe(plugins.coveralls())
				.on('end', done);
			} else {
				done();
			}
		});
	});
});
