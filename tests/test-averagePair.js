const expect = require('chai').expect;
const averagePair = require('../averagePair.js');

describe("Test Average pair", function() {
    it("averagePair is a function", function() {
        expect(averagePair).to.be.a('function');
    })

    it("Test case 1 from Udemy course - [1, 2, 3], 2.5", function() {
        var result = averagePair([1, 2, 3], 2.5);
        expect(result).to.be.true;
    })

    it("Test case 2 from Udemy course - [1, 3, 3, 5, 6, 7, 10, 12, 19], 8", function() {
        var result = averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8);
        expect(result).to.be.true;
    })

    it("Test case 3 from Udemy course - [-1, 0, 3, 4, 5, 6], 4.1", function() {
        var result = averagePair([-1, 0, 3, 4, 5, 6], 4.1);
        expect(result).to.be.false;
    })

    it("Test case 4 from Udemy course - [], 4", function() {
        var result = averagePair([], 4);
        expect(result).to.be.false;
    })    
})