/**
 * Implement a function which accepts a sorted array, and counts the unique values
 * in the array. There can be negative numbers in the array, but it will always be sorted
 */

// Bonus - Do this with constant or O(1) space and O(n) time

function countUniqueValues(arr) {

    let leftPointer = 0;
    let rightPointer = 0;
    let count = 0;

    if (arr.length > 0) {
        count = 1;
    }

    while (rightPointer < arr.length) {
        
        if (arr[rightPointer] !== arr[leftPointer]) {
            count += 1;
            leftPointer = rightPointer;
        }

        rightPointer += 1;
    }

    return count;
}

module.exports = countUniqueValues;