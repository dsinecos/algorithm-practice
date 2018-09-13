// Checks if a testString is a part of another string and testString appears as a consecutive string in the string

function isSubsequence(testStr, str) {

    for (let i = 0; i <= (str.length - testStr.length); i++) {
        let isSubsequence = null;
        for (let j = 0; j < testStr.length; j++) {
            let testStrStartChar = testStr[j];
            let testStrEndChar = testStr[testStr.length - 1 - j];

            let strStartChar = str[i + j];
            let strEndChar = str[i + testStr.length - 1 - j];

            if (testStrStartChar !== strStartChar || testStrEndChar !== strEndChar) {
                isSubsequence = false;
                break;
            } else if (testStrStartChar === strStartChar && testStrEndChar === strEndChar) {
                isSubsequence = true;
            }
        }

        if(isSubsequence) {
            return true;
        }
    }

    return false;

}

module.exports = isSubsequence;