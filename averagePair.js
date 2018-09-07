// https://www.udemy.com/js-algorithms-and-data-structures-masterclass/
// Section 6 - Exercise 5

function averagePair(array, targetAvg) {

    if (!array.length) return false;

    let leftPointer = 0;
    let rightPointer = array.length - 1;

    while (leftPointer < rightPointer) {
        let currentAvg = (array[leftPointer] + array[rightPointer]) / 2;

        if (currentAvg === targetAvg) {
            return true;
        } else if (currentAvg < targetAvg) {
            leftPointer += 1;
        } else if (currentAvg > targetAvg) {
            rightPointer -= 1;
        }
    }

    return false;
}

module.exports = averagePair;