## Binary Search on Arrays

- Only works on sorted arrays
- Eliminates half of the sample space in each iteration

Uses the Divide and Conquer and Multiple pointer pattern of problem solving

## Pseudocode

![binary-search-on-arrays](/searching-algorithms/binary-search/binary-search-on-arrays.svg)

- Create a leftPointer at the start of the array and a rightPointer at the end of the array

- While the left pointer comes before the right pointer
    - Create a pointer in the middle
    - If value is found, return index
    - If value is greater than value at midPointer, move the leftPointer up
    - If value is smaller than value at midPointer, move the rightPointer down

- If value is not found return -1

## Time complexity

| Case | Time-complexity |
| -- | -- |
| Best | O(1) |
| Average | O(logn) |
| Worst | O(logn) |

