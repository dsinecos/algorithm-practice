function binarySearch(arr, value) {

    if (value < arr[0] || value > arr[arr.length - 1]) {
        return -1;
    }

    let leftPointer = 0;
    let rightPointer = arr.length - 1;
    let midPointer = Math.floor((rightPointer - leftPointer) / 2 + leftPointer);
    let midElement = arr[midPointer];

    while (midElement !== value && leftPointer <= rightPointer) {

        if (value < midElement) {
            rightPointer = midPointer - 1;
        }

        if (value > midElement) {
            leftPointer = midPointer + 1;
        }

        midPointer = Math.floor((rightPointer - leftPointer) / 2 + leftPointer);
        midElement = arr[midPointer];
    }

    if (midElement === value) {
        return midPointer;
    }

    return -1;
}

module.exports = {
    binarySearch,
}