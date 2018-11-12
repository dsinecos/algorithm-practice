const { linearSearch } = require('./linear-search');
const chai = require('chai');
const expect = chai.expect;

describe('Test linear search', function() {
    let arr;

    beforeEach(function() {
        arr = ['a', 'b', 'c', 'd', 'e', 'f'];
    })
    it('Returns index of element inside the array', function () {
        const result = linearSearch(arr, 'c');
        expect(result).to.equal(2);
    })

    it('Returns -1 for an element not inside the array', function () {
        const result = linearSearch(arr, 'g');
        expect(result).to.equal(-1);
    })
})