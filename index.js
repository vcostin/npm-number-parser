module.exports = function parseNumbers(inputString, callback) {
    'use strict';
    var output;
    if (typeof inputString !== 'string') {
        throw new TypeError('Input data is not a string');
    }
    output = (inputString.match(/[+-]?((\.\d+)|(\d+(\.\d+)?)([eE][+-]?\d+)?)/g) || []).map(Number);
    if (typeof callback === "function") {
        return callback(output);
    }
    return output;
};
