const { includes } = require('./includes');
const chai = require('chai');
const expect = chai.expect;

describe('Test includes', function() {
    let arr;

    beforeEach(function() {
        arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    })
    it('Returns true for an element inside the array', function () {
        const result = includes(arr, 3);
        expect(result).to.be.true
    })

    it('Returns false for an element not inside the array', function () {
        const result = includes(arr, 10);
        expect(result).to.be.false;
    })
})