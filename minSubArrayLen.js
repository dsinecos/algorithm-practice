function minSubArrayLen(array, targetSum) {
    let leftPointer = 0;
    let rightPointer = 0;
    let minLen = Infinity;
    let tempSum = 0;

    while (leftPointer < array.length) {

        if (tempSum < targetSum && rightPointer < array.length) {
            tempSum += array[rightPointer];
            rightPointer += 1;

        } else if (tempSum >= targetSum) {
            minLen = Math.min(minLen, rightPointer - leftPointer);
            tempSum -= array[leftPointer];
            leftPointer += 1;

        } else {
            break;
        }
    }
    return (minLen === Infinity) ? 0 : minLen;
}

module.exports = minSubArrayLen;