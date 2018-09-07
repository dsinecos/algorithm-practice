// https://www.udemy.com/js-algorithms-and-data-structures-masterclass/
// Section 6 - Exercise 3

function charMap(str) {

    let charMap = {};

    str.split("").map((element) => {

        if(!charMap[element]) {
            charMap[element] = 0;
        }

        charMap[element] += 1;
    })

    return charMap;
}

function compareCharMaps(charMap1, charMap2) {
    if(Object.keys(charMap1).length !== Object.keys(charMap2).length) {
        return false;
    }

    for(let key in charMap1) {
        if(charMap1[key] !== charMap2[key]) {
            return false;
        }
    }

    return true;
}

function frequencyCounter(input1, input2) {

    let charMap1 = charMap(String(input1));
    let charMap2 = charMap(String(input2));

    return compareCharMaps(charMap1, charMap2);
}

module.exports = frequencyCounter;