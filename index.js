'use strict';
module.exports = function parseNumbers(inputString, callback) {
    var error;

    if (typeof callback === "function") {
        try {
            return callback(stringValidation(inputString), outputNumbers(inputString));
        } catch (e) {
            return callback(e, null);
        }
    } else {
        try {
            error = stringValidation(inputString);
            if (error !== null) {
                thrower(error);
            }
        } catch (e) {
            thrower(e);
        }
        return outputNumbers(inputString);
    }
};

/**
 * Check if input ia a string
 * @param inputString String
 * @returns {TypeError || null}
 */
function stringValidation(inputString) {
    if (typeof inputString !== 'string') {
        return new TypeError('Input data is not a string');
    }
    return null;
}

/**
 * Returns the number array from string
 * @param inputString String
 * @returns {Array}
 */
function outputNumbers(inputString) {
    return (inputString.match(/[+-]?((\.\d+)|(\d+(\.\d+)?)([eE][+-]?\d+)?)/g) || []).map(Number);
}

/**
 * Just in any case, Error validator
 * @param error
 */
function thrower(error) {
    if (error instanceof Error) {
        throw error;
    } else {
        throw new TypeError('This is not an error object');
    }
}
