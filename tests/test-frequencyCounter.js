const expect = require('chai').expect;
const frequencyCounter = require('../frequencyCounter.js');

describe("Test Frequency counter", function() {
    it("frequencyCounter is a function", function() {
        expect(frequencyCounter).to.be.a('function');
    })

    it('Returns true for two integers with same frequency of digits', function() {
        var result = frequencyCounter(12345, 54321);
        expect(result).to.be.true;
    })

    it('Returns true for two integers (with repeated digits) with same frequency of digits', function() {
        var result = frequencyCounter(123455, 554321);
        expect(result).to.be.true;
    })

    it('Returns false for two integers with different frequency of digits', function() {
        var result = frequencyCounter(12345, 4321);
        expect(result).to.be.false;
    })

    it("Test case 1 from Udemy course - 182, 281", function() {
        var result = frequencyCounter(182, 281);
        expect(result).to.be.true;
    })

    it("Test case 2 from Udemy course - 34, 14", function() {
        var result = frequencyCounter(34, 14);
        expect(result).to.be.false;
    })

    it("Test case 3 from Udemy course - 3589578, 5879385", function() {
        var result = frequencyCounter(3589578, 5879385);
        expect(result).to.be.true;
    })

    it("Test case 4 from Udemy course - 22, 222", function() {
        var result = frequencyCounter(22, 222);
        expect(result).to.be.false;
    })
})