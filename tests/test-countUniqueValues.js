const expect = require('chai').expect;
const countUniqueValues = require('../countUniqueValues');

describe('Test countUniqueValues', function() {
    it('Udemy Case 1', function () {
        let result = countUniqueValues([1, 1, 1, 1, 1, 2]);
        expect(result).to.equal(2);
    })

    it('Udemy Case 2', function () {
        let result = countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);
        expect(result).to.equal(7);
    })

    it('Udemy Case 3', function () {
        let result = countUniqueValues([]);
        expect(result).to.equal(0);
    })

    it('Udemy Case 4', function () {
        let result = countUniqueValues([-2, -1, -1, 0, 1]);
        expect(result).to.equal(4);
    })
})