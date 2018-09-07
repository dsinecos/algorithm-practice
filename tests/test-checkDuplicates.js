const expect = require('chai').expect;
const checkDuplicates = require('../checkDuplicates.js');

describe("Test Check duplicates", function() {
    it("checkDuplicates is a function", function() {
        expect(checkDuplicates).to.be.a('function');
    })

    it("Returns true when there are duplicates", function() {
        var result = checkDuplicates(1, 2, 3, 4, 5, 2);

        expect(result).to.be.true;
    })

    it("Returns false when there are no duplicates", function() {
        var result = checkDuplicates(1, 2, 3, 4, 5);

        expect(result).to.be.false;
    })

})