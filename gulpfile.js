var gulp = require('gulp'),
	path = require('path'),
	jshintReporter = require('jshint-stylish'),
	plugins = require('gulp-load-plugins')({
		config: path.join(__dirname, 'package.json')
	}),
	pkg = require('./package.json');

var path = {
	src: {
		files: 'src/**/*.js'
	},
	test: {
		files: 'test/**/*.test.js'
	}
}

var header = ['/**',
	' * <%= pkg.name %>',
	' * <%= pkg.description %>',
	' * @version v<%= pkg.version %>',
	' * @link <%= pkg.homepage %>',
	' * @license <%= pkg.license %>',
	' */',
	'(function (root, factory) {',
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
	'	if (!StringMask) {',
	'		throw new Error(\'StringMask not found\');',
	'	}',
	''].join('\n');

var footer = ['',
	'	return {',
	'		ie: IE,',
	'		cpf: CPF,',
	'		cnpj: CNPJ,',
	'		phone: PHONE,',
	'		cep: CEP,',
	'		finance: FINANCE,',
	'		nfeAccessKey: NFEACCESSKEY',
	'	};',
	'}));'].join('\n');

gulp.task('build:lib', function() {
	return gulp.src([
		path.src.files
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
	gulp.src(path.src.files)
	.pipe(plugins.jshint('.jshintrc'))
	.pipe(plugins.jshint.reporter(jshintReporter));
	done();
});

gulp.task('runtestdot', ['jshint', 'build'], function() {
	gulp.src(path.test.files, {read: false})
	.pipe(plugins.mocha({
		reporter: 'dot'
	}))
	.on('error', console.warn.bind(console));
});

gulp.task('runtest', ['jshint', 'build'], function() {
	gulp.src(path.test.files, {read: false})
	.pipe(plugins.mocha({
		reporter: 'spec'
	}))
	.on('error', console.warn.bind(console));
});

gulp.task('default', ['jshint', 'build', 'runtestdot'], function() {
	gulp.watch(path.src.files, ['jshint', 'build', 'runtestdot']);
});

gulp.task('test', ['jshint', 'build', 'runtest']);

gulp.task('test-watch', ['jshint', 'build', 'runtest'], function() {
	gulp.watch(path.src.files, ['jshint', 'build', 'runtest']);
});
