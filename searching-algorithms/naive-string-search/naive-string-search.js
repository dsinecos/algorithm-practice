const R = require('ramda');

/**
 * The following code is written using Ramda.js for a declarative style implementation
 * of naiveStringSearch problem
 */
const matchSubstr = R.curry((base, target) => (base === target))

const naiveStringSearchD = (subStr, str) => {
    return R.pipe(
        R.split(''),
        R.aperture(R.length(subStr)),
        R.map(R.join('')),
        R.filter(matchSubstr(subStr)),
        R.length,
    )(str)
}

/**
 * The following code is an imperative style implementation of naiveStringSearch problem
 */
function naiveStringSearchI(subStr, str) {

    let matchCount = 0;

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < subStr.length; j++) {
            if (str[i + j] !== subStr[j]) {
                break;
            }
            if (j === subStr.length - 1) {
                matchCount += 1;
            }
        }
    }

    return matchCount;
}

module.exports = {
    naiveStringSearchD,
    naiveStringSearchI
}