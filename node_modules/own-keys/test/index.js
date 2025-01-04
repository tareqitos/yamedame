'use strict';

var test = require('tape');
var hasSymbols = require('has-symbols/shams')();
var hasPropertyDescriptors = require('has-property-descriptors')();

var ownKeys = require('../');

test('ownKeys', function (t) {
	t.equal(typeof ownKeys, 'function', 'is a function');
	t.equal(
		ownKeys.length,
		1,
		'has a length of 1'
	);

	t.test('basics', function (st) {
		var obj = { a: 1, b: 2 };
		if (hasPropertyDescriptors) {
			Object.defineProperty(obj, 'c', {
				configurable: true,
				enumerable: false,
				writable: true,
				value: 3
			});
		}

		st.deepEqual(
			ownKeys(obj).sort(),
			(hasPropertyDescriptors ? ['a', 'b', 'c'] : ['a', 'b']).sort(),
			'includes non-enumerable properties'
		);

		st.end();
	});

	t.test('symbols', { skip: !hasSymbols }, function (st) {
		/** @type {Record<PropertyKey, unknown>} */
		var obj = { a: 1 };
		var sym = Symbol('b');
		obj[sym] = 2;

		var nonEnumSym = Symbol('c');
		Object.defineProperty(obj, nonEnumSym, {
			configurable: true,
			enumerable: false,
			writable: true,
			value: 3
		});

		st.deepEqual(
			ownKeys(obj).sort(),
			['a', sym, nonEnumSym].sort(),
			'works with symbols, both enum and non-enum'
		);

		st.end();
	});

	t.end();
});
