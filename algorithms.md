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

## Find the longest sub-string

**Approaches**

- Sliding Window pattern
    - 