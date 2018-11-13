const { binarySearch } = require('./binary-search');
const chai = require('chai');
const expect = chai.expect;

describe('Test binary search', function() {
    let arr;

    beforeEach(function() {
        arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    })
    it('Returns index of element inside the array', function () {
        const result = binarySearch(arr, 3);
        expect(result).to.equal(2);
    })

    it('Returns -1 for an element not inside the array', function () {
        const result = binarySearch(arr, 11);
        expect(result).to.equal(-1);
    })
})