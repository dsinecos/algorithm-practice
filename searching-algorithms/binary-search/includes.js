function includes(arr, value) {

    if(arr.length === 1) {
        return arr[0] === value ? true : false;
    }

    let midIndex = Math.floor((arr.length - 1) / 2);
    let midElement = arr[midIndex];

    if (midElement === value) {
        return true;
    } else if (value < midElement) {
        let newArray = arr.slice(0, midIndex);
        return includes(newArray, value);
    } else if (value > midElement) {
        let newArray = arr.slice(midIndex + 1, arr.length);
        return includes(newArray, value);
    }
}

module.exports = {
    includes
}