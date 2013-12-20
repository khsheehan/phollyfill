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
 * String.addSlashes
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
 * String.bin2Hex
 */
if (typeof String.prototype.bin2Hex !== 'function') {
    String.prototype.bin2Hex = function() {
        return parseInt(this, 2).toString(16);
    };
}

/**
 * String.hex2Bin
 */
if (typeof String.prototype.hex2Bin !== 'function') {
    String.prototype.hex2Bin = function() {
        return parseInt(this, 16).toString(2);
    };
}

/**
 * String.convertBase
 * @param baseIn    The base of the input number
 * @param baseOut   The base of the output number
 */
if (typeof String.prototype.convertBase !== 'function') {
    String.prototype.convertBase = function(baseIn, baseOut) {
        return parseInt(this, baseIn).toString(baseOut);
    };
} 

/**
 * String.rtrim
 */
if (typeof String.prototype.rtrim !== 'function') {
    String.prototype.rtrim = function() {
        return this.replace(/\s+$/, '');
    };
}

/**
 * String.countChars
 */
if (typeof String.prototype.countChars !== 'function') {
    String.prototype.countChars = function() {
        var charCount = {},
            i;
        for (i = 0; i < this.length; i++) {
            charCount[this[i]] = charCount[this[i]] + 1 || 1;
        }
        return charCount;
    };
}

/**
 * String.repeat
 * @param num   The number of times to repeat the string
 */ 
if (typeof String.prototype.repeat !== 'function') {
    String.prototype.repeat = function(num) {
        return new Array(isNaN(num)? 1 : ++num).join(this);
    }
}

/**
 * String.shuffle
 */
if (typeof String.prototype.shuffle !== 'function') {
    String.prototype.shuffle = function() {
        return this.split('').sort(function() {
            return 0.5 - Math.random();
        }).join('');        
    }
}

/**
 * String.reverse
 */
if (typeof String.prototype.reverse !== 'function') {
    String.prototype.reverse = function() {
        return this.split('').reverse().join('');
    }
}

/**
 * String.tokenize
 */
if (typeof String.prototype.tokenize !== 'function') {
    String.prototype.tokenize = function() {
        return this.split('');
    }
}

/**
 * String.ucfirst
 */
if (typeof String.prototype.ucfirst !== 'function') {
    String.prototype.ucfirst = function() {
        return this.charAt(0).toUpperCase() + this.substr(1);
    }
}

/**
 * String.ucwords
 */
if (typeof String.prototype.ucwords !== 'function') {
    String.prototype.ucwords = function() {
        var ucList = [];
        this.split(" ").forEach(function(s) {
            ucList.push(s.ucfirst());
        });
        return ucList.join(" ");
    }
}