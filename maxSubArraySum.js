function maxSubArraySum(arr, num) {

    let initSum = 0;
    let tempSum = 0;
    let maxSum = null;

    for (let i = 0; i < num; i++) {
        if (arr[i] === undefined) return null;
        initSum += arr[i];
    }

    tempSum = initSum;
    maxSum = initSum;

    for (let i = 0; i + num < arr.length; i++) {
        let prevSum = tempSum;
        let currentSum = tempSum - arr[i] + arr[i+num];

        if(currentSum > maxSum) {
            maxSum = currentSum;
        }

        tempSum = currentSum;

    }

    return maxSum;
}

module.exports = maxSubArraySum;