var chai = require('chai'),
    should = chai.should(),
    expect = chai.expect,
    parseNumbers = require('./../index');

describe('Testing npm-number-parser module', function () {
    describe('should return an array of numbers', function () {
        it('returns an array of numbers', function () {
            var input = ' -1 -5.3, 45  2 4 5  ,  ty pt 12pt 5.5 test -0.123123';
            var output = parseNumbers(input);
            output.should.be.an('array');
            output.should.have.length(9);
            output.should.be.eql([-1, -5.3, 45, 2, 4, 5, 12, 5.5, -0.123123]);
        });
        it('returns an empty array if input string does not have numbers', function () {
            var input = 'arrr... I have no numbers !@#$%^&*';
            var output = parseNumbers(input);
            output.should.be.an('array');
            output.should.have.length(0);
            output.should.be.eql([]);
        });
    });

    describe("callback have same functionality for asynchronous purposes", function () {
        it('returns an array of numbers in callback callback', function () {
            var input = ' -1 -5.3, 45  2 4 5  ,  ty pt 12pt 5.5 test -0.123123';
            parseNumbers(input, function (output) {
                output.should.be.an('array');
                output.should.have.length(9);
                output.should.be.eql([-1, -5.3, 45, 2, 4, 5, 12, 5.5, -0.123123]);
            });
        });
        it('returns an empty array if input string does not have numbers', function () {
            var input = 'arrr... I have no numbers !@#$%^&*';
            parseNumbers(input, function (output) {
                output.should.be.an('array');
                output.should.have.length(0);
                output.should.be.eql([]);
            });
        });
    });

    describe('Module throws TypeError if input is something else than string', function () {
        it('trows TypeError', function () {
            var inputArray, i, total;
            inputArray = [null, undefined, 25, {}, []];
            for (i = 0, total = inputArray.length; i < total; i++) {
                expect(function () {
                    parseNumbers(inputArray[i]);
                }).to.throw(TypeError);
            }
        });
    });

    describe("Module throws error if input data is not a string and using a callback", function () {
        it('trows TypeError with callback', function () {
            var inputArray, i, total;
            inputArray = [null, undefined, 25, {}, []];
            for (i = 0, total = inputArray.length; i < total; i++) {
                expect(function () {
                    parseNumbers(inputArray[i], function (output) {
                    })
                }).to.throw(TypeError);
            }
        });
    });

});
