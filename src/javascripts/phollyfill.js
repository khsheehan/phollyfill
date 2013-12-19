/**
 * phollyfill.js
 */

/**
 * String.contains()
 * @param str           The string to search for
 * @param startIndex    The index to start searching at
 */
if (typeof String.prototype.contains !== 'function') {
    String.prototype.contains = function(str, startIndex) {
        return this.indexOf(str, startIndex) !== -1;
    };
}

/**
 * String.addSlashes()
 */
if (typeof String.prototype.addSlashes !== 'function') {
    String.prototype.addSlashes = function() {
        return this.replace(/\\/g, '\\\\').
                    replace(/\u0008/g, '\\b').
                    replace(/\t/g, '\\t').
                    replace(/\n/g, '\\n').
                    replace(/\f/g, '\\f').
                    replace(/\r/g, '\\r').
                    replace(/'/g, '\\\'').
                    replace(/"/g, '\\"');
    }
}

/**
 * String.bin2Hex()
 */
if (typeof String.prototype.bin2Hex !== 'function') {
    String.prototype.bin2Hex = function() {
        return parseInt(this, 2).toString(16);
    };
}

/**
 * String.hex2Bin()
 */
if (typeof String.prototype.hex2Bin !== 'function') {
    String.prototype.hex2Bin = function() {
        return parseInt(this, 16).toString(2);
    };
}

/**
 * String.rtrim()
 */
if (typeof String.prototype.rtrim !== 'function') {
    String.prototype.rtrim = function() {
        return this.replace(/\s+$/, '');
    };
}