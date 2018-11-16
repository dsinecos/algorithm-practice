const { naiveStringSearchI } = require('./naive-string-search');
const chai = require('chai');
const expect = chai.expect;

describe('Test naive string search', function() {

    it('Returns number of subsequences matching the string', function () {
        let str = 'abcdefgh';
        let subStr = 'ab';

        const result = naiveStringSearchI(subStr, str);
        expect(result).to.equal(1);
    })

    it('Returns zero if no subsequences match the string', function () {
        let str = 'abcdefgh';
        let subStr = 'ij';

        const result = naiveStringSearchI(subStr, str);
        expect(result).to.equal(0);
    })

})