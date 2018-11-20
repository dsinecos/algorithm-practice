function longestSubstring(str) {
    let leftPointer = 0;
    let rightPointer = 0;
    let longestSubstring = 0;

    if (str.length < 2) {
        longestSubstring = str.length;
        return longestSubstring;
    }

    while (rightPointer < str.length) {
        if (rightPointer === 0) {
            rightPointer += 1;
        }

        for (let i = leftPointer; i <= rightPointer; i++) {
            if (str[i] === str[rightPointer] && i !== rightPointer) {
                leftPointer = i + 1;
                let currentSubstring = rightPointer - leftPointer;
                longestSubstring = Math.max(longestSubstring, currentSubstring);
            }

            if (i === rightPointer) {
                let currentSubstring = rightPointer - leftPointer + 1;
                longestSubstring = Math.max(longestSubstring, currentSubstring);
            }
        }

        rightPointer += 1;
    }

    return longestSubstring;
}

module.exports = longestSubstring;