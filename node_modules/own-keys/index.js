'use strict';

var GetIntrinsic = require('get-intrinsic');

var safePushApply = require('safe-push-apply');

var $ownKeys = GetIntrinsic('%Reflect.ownKeys%', true);
var $gOPN = GetIntrinsic('%Object.getOwnPropertyNames%', true);
var $gOPS = GetIntrinsic('%Object.getOwnPropertySymbols%', true);

var keys = require('object-keys');

/** @type {import('.')} */
module.exports = $ownKeys || function OwnPropertyKeys(source) {
	/** @type {(keyof typeof source)[]} */
	var ownKeys = ($gOPN || keys)(source);
	if ($gOPS) {
		safePushApply(ownKeys, $gOPS(source));
	}
	return ownKeys;
};
