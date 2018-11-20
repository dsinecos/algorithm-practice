const expect = require('chai').expect;
const longestSubstring = require('../longestSubstring');

describe('Test Longest Substring', function () {
    it('Udemy Test Case 1', function () {
        let result = longestSubstring('');
        expect(result).to.equal(0);
    });

    it('Udemy Test Case 2', function () {
        let result = longestSubstring('rithmschool');
        expect(result).to.equal(7);
    });

    it('Udemy Test Case 3', function () {
        let result = longestSubstring('thisisawesome');
        expect(result).to.equal(6);
    });

    it('Udemy Test Case 4', function () {
        let result = longestSubstring('thecatinthehat');
        expect(result).to.equal(7);
    });

    it('Udemy Test Case 5', function () {
        let result = longestSubstring('bbbbbb');
        expect(result).to.equal(1);
    });

    it('Udemy Test Case 6', function () {
        let result = longestSubstring('longestsubstring');
        expect(result).to.equal(8);
    });

    it('Udemy Test Case 7', function () {
        let result = longestSubstring('thisishowwedoit');
        expect(result).to.equal(6);
    });
});


