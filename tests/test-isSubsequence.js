const expect = require('chai').expect;
const isSubsequence = require('../isSubsequence.js');

describe("Test for sub-sequences pair", function() {
    it("isSubsequence is a function", function() {
        expect(isSubsequence).to.be.a('function');
    })

    it("Udemy Test case 1 - 'hello', 'hello world'", function() {
        let result = isSubsequence('hello', 'hello world');

        expect(result).to.be.true;
    })

    it("Udemy Test case 2 - 'sing', 'sting'", function() {
        let result = isSubsequence('sing', 'sting');

        expect(result).to.be.true;
    })

    it("Udemy Test case 3 - 'abc', 'abracadabra'", function() {
        let result = isSubsequence('abc', 'abracadabra');

        expect(result).to.be.true;
    })

    it("Udemy Test case 4 - 'abc', 'acb'", function() {
        let result = isSubsequence('abc', 'acb');

        expect(result).to.be.false;
    })

})