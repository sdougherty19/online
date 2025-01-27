/* -*- js-indent-level: 8 -*- */
/*
 * L.Util contains various utility functions used throughout Leaflet code.
 */

/* global Util */

L.Util = {
	// extend an object with properties of one or more other objects
	extend: function (dest) {
		var i, j, len, src;

		for (j = 1, len = arguments.length; j < len; j++) {
			src = arguments[j];
			for (i in src) {
				dest[i] = src[i];
			}
		}
		return dest;
	},

	// create an object from a given prototype
	create: Object.create || (function () {
		function F() {}
		return function (proto) {
			F.prototype = proto;
			return new F();
		};
	})(),

	// bind a function to be called with a given context
	bind: function (fn, obj) {
		var slice = Array.prototype.slice;

		if (fn.bind) {
			return fn.bind.apply(fn, slice.call(arguments, 1));
		}

		var args = slice.call(arguments, 2);

		return function () {
			return fn.apply(obj, args.length ? args.concat(slice.call(arguments)) : arguments);
		};
	},

	// return unique ID of an object
	stamp: Util.stamp,

	// return a function that won't be called more often than the given interval
	throttle: Util.throttle,

	// wrap the given number to lie within a certain range (used for wrapping longitude)
	wrapNum: Util.wrapNum,

	// do nothing (used as a noop throughout the code)
	falseFn: Util.falseFn,

	// round a given number to a given precision
	formatNum: Util.formatNum,

	// removes given prefix and suffix from the string if exists
	// if suffix is not specified prefix is trimmed from both end of string
	// trim whitespace from both sides of a string if prefix and suffix are not given
	trim: Util.trim,

	// removes prefix from string if string starts with that prefix
	trimStart: Util.trimStart,

	// removes suffix from string if string ends with that suffix
	trimEnd: Util.trimEnd,

	// split a string into words
	splitWords: Util.splitWords,

	// set options to an object, inheriting parent's options as well
	setOptions: function (obj, options) {
		if (!Object.prototype.hasOwnProperty.call(obj, 'options')) {
			obj.options = obj.options ? L.Util.create(obj.options) : {};
		}
		for (var i in options) {
			obj.options[i] = options[i];
		}
		return obj.options;
	},

	round: Util.round,

	// super-simple templating facility, used for TileLayer URLs
	template: Util.template,

	isArray: Util.isArray,

	// minimal image URI, set to an image when disposing to flush memory
	emptyImageUrl: Util.emptyImageUrl,

	toggleFullScreen: Util.toggleFullScreen,

	isEmpty: Util.isEmpty,

	mm100thToInch: Util.mm100thToInch,

	getTextWidth: Util.getTextWidth,

	getProduct: Util.getProduct,

	replaceCtrlAltInMac: Util.replaceCtrlAltInMac,

	randomString: Util.randomString,

	requestAnimFrame: Util.requestAnimFrame,
	cancelAnimFrame: Util.cancelAnimFrame,


	// on IE11 Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER are not supported
	MAX_SAFE_INTEGER: Util.MAX_SAFE_INTEGER,
	MIN_SAFE_INTEGER: Util.MIN_SAFE_INTEGER,

};

if (!String.prototype.startsWith) {
	String.prototype.startsWith = function(searchString, position) {
		position = position || 0;
		return this.substr(position, searchString.length) === searchString;
	};
}

if (!Element.prototype.remove) {
	Element.prototype.remove = function() {
		if (this.parentNode) {
			this.parentNode.removeChild(this);
		}
	};
}

if (Number.EPSILON === undefined) {
	Number.EPSILON = Math.pow(2, -52);
}

if (!Number.MAX_SAFE_INTEGER) {
	Number.MAX_SAFE_INTEGER = 9007199254740991; // Math.pow(2, 53) - 1;
}

// shortcuts for most used utility functions
L.extend = L.Util.extend;
L.bind = L.Util.bind;
L.stamp = L.Util.stamp;
L.setOptions = L.Util.setOptions;
L.round = L.Util.round;
L.toggleFullScreen = L.Util.toggleFullScreen;
L.isEmpty = L.Util.isEmpty;
L.mm100thToInch = L.Util.mm100thToInch;
L.getTextWidth = L.Util.getTextWidth;
