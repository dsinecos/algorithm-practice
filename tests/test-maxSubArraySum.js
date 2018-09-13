const expect = require('chai').expect;
const maxSubArraySum = require('../maxSubArraySum');

describe("Test for sub-sequences pair", function () {
    it("maxSubArraySum is a function", function () {
        expect(maxSubArraySum).to.be.a('function');
    })

    it("Udemy Test case 1 - [100, 200, 300, 400], 2", function () {
        let result = maxSubArraySum([100, 200, 300, 400], 2);

        expect(result).to.be.equal(700);
    })

    it("Udemy Test case 2 - [1, 4, 2, 10, 23, 3, 1, 0, 20], 4", function () {
        let result = maxSubArraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4);

        expect(result).to.be.equal(39);
    })

    it("Udemy Test case 3 - [-3, 4, 0, -2, 6, -1], 2", function () {
        let result = maxSubArraySum([-3, 4, 0, -2, 6, -1], 2);

        expect(result).to.be.equal(5);
    })

    it("Udemy Test case 4 - [3, -2, 7, -4, 1, -1, 4, -2, 1], 2", function () {
        let result = maxSubArraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2);

        expect(result).to.be.equal(5);
    })

    it("Udemy Test case 5 - [2, 3], 3", function () {
        let result = maxSubArraySum([2, 3], 3);

        expect(result).to.be.null;
    })
    

})