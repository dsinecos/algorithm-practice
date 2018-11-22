const expect = require('chai').expect;
const minSubArrayLen = require('../minSubArrayLen');

describe("Find the minimum length of a contiguous subarray for a given sum", function () {
    it("minSubArrayLen is a function", function () {
        expect(minSubArrayLen).to.be.a('function');
    })

    it("Returns 1 if a single value in the array is equal to target value", function () {
        let result = minSubArrayLen([2, 3, 1, 2, 7, 1], 7);

        expect(result).to.be.equal(1);
    })

    it("Udemy Test case 1 - [2, 3, 1, 2, 4, 3], 7", function () {
        let result = minSubArrayLen([2, 3, 1, 2, 4, 3], 7);

        expect(result).to.be.equal(2);
    })

    it("Udemy Test case 2 - [2, 1, 6, 5, 4], 9", function () {
        let result = minSubArrayLen([2, 1, 6, 5, 4], 9);

        expect(result).to.be.equal(2);
    })

    it("Udemy Test case 3 - [3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52", function () {
        let result = minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52);

        expect(result).to.be.equal(1);
    })

    it("Udemy Test case 4 - [1, 4, 16, 22, 5, 7, 8, 9, 10], 39", function () {
        let result = minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39);

        expect(result).to.be.equal(3);
    })

    it("Udemy Test case 5 - [1, 4, 16, 22, 5, 7, 8, 9, 10], 55", function () {
        let result = minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55);

        expect(result).to.be.equal(5);
    })

    it("Udemy Test case 6 - [4, 3, 3, 8, 1, 2, 3], 11", function () {
        let result = minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11);

        expect(result).to.be.equal(2);
    })

    it("Udemy Test case 7 - [1, 4, 16, 22, 5, 7, 8, 9, 10], 95", function () {
        let result = minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95);

        expect(result).to.be.equal(0);
    })
})