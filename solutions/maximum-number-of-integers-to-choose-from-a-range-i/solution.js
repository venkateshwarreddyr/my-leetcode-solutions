// Problem: Maximum Number of Integers to Choose From a Range I
// LeetCode: https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-i/
// Language: javascript
// Runtime: 599 ms
// Memory: 52.8 MB
// Submitted: 2023-06-07

/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function(banned, n, maxSum) {
    
    let sum = 0;
    let counter = 0;
    banned = banned.sort((a, b) => a-b);

    const binarySearch  = (arr, val, start = 0, end = arr.length - 1) => {
      const mid = Math.floor((start + end) / 2);

      if (val === arr[mid]) {
        return mid;
      }

      if (start >= end) {
        return -1;
      }

      return val < arr[mid]
        ? binarySearch(arr, val, start, mid - 1)
        : binarySearch(arr, val, mid + 1, end);
    }
    
    for(let i = 1; i<=n; i++){
        if(binarySearch(banned, i) === -1){
            if(sum+i<=maxSum){
                sum+=i;
                counter++;
            }
        }
    }
    
    return counter;
};
