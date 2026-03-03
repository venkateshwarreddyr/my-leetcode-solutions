// Problem: Count the Number of Incremovable Subarrays I
// LeetCode: https://leetcode.com/problems/count-the-number-of-incremovable-subarrays-i/
// Language: javascript
// Runtime: 59 ms
// Memory: 61.4 MB
// Submitted: 2025-06-29

function isIncreasing(a) {
    let n = a.length
    for (let i = 1; i < n; i++) {
        if (a[i - 1] >= a[i]) {
            return false
        }
    }
    return true
}

var incremovableSubarrayCount = function (nums) {
    let n = nums.length
    if (n === 0) return 0
    // if array is already increasing, then return sigma(n) = n(n+1)/2

    let count = 0

    // NOT POSSIBLE - what if i = j? nothing is deleted, full array need to check if already increasing, do we need to add +1 at end ? Need to think more.

    // start any position, and expand nonempty subarray
    //      take before and after that nonempty subarray, shud be increasing
    //          if so, increment count
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j <= n; j++) {
            // TODO: check last element, is <= correct
            // start, delete count - on copy of Array
            let beforeAfterPartsArr = [
                ...nums.slice(0, i), //
                ...nums.slice(j)
            ]
            if (isIncreasing(beforeAfterPartsArr)) {
                // cl = console.log
                // cl(beforeAfterPartsArr)
                count++
            }
        }
    }

    return count
};

/*

[]

[1]

[1,1]
[1,2]
[2,1]
[2,2]

[1,1,2]
[1,2,1]
[2,1,1]

[1,2,3]
[1,3,2]

[2,1,3]
[2,3,1]

[3,1,2]
[3,2,1]

*/

