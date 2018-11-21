## Count Unique Values

**Approaches**

- For a sorted array use Multiple Pointers
    - Start with two pointers - left and right - at index 0
    - Iterate until the rightPointer < length
    - In each iteration
        - If value(leftPointer) equal to value(rightPointer) increment rightPointer by 1
        - If value(leftPointer) is not equal to value(rightPointer)
            - Increment count of unique values
            - Move leftPointer to the current rightPointer
            - Increment rightPointer by 1
  
- For an unsorted array use Character Frequency

- Use language's built in data structures that remove duplicates eg. Set in JavaScript

## Find the longest sub-string with no duplicate characters

**Approaches**

- Sliding Window pattern
    - Start with two pointers - left and right - at index 0
    - Cover edge cases when the string is empty or has only 1 character
    - Iterate until the rightPointer < length
    - Compare for each character within a subsequence against the rightPointer
        - If there is a match, shift the leftPointer and update the LongestSubstring length
        - If there is no match increment the rightPointer and update the LongestSubstring length