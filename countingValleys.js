/**
 * Problem - https://www.hackerrank.com/challenges/counting-valleys/problem
 */

function countValleys(stepsArray) {
    let stepSum = 0;
    let valleyCount = 0;

    stepsArray.forEach((step) => {

        if(step === 'D') {
            stepSum--;
        } else if (step === 'U') {
            stepSum++;
        }

        if (step === 'U' && stepSum === 0) {
            valleyCount++;
        }

    })

    return valleyCount;
}

let array = ['U','D','D','D','U','D','U','U'];
console.log(countValleys(array));

let str = "DUDUDUDUUDD";
let strToArray = str.split("");
strToArray