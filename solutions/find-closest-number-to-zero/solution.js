// Problem: Find Closest Number to Zero
// LeetCode: https://leetcode.com/problems/find-closest-number-to-zero/
// Language: javascript
// Runtime: 90 ms
// Memory: 44.8 MB
// Submitted: 2023-06-01

cl = console.log
let bs = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] >= target) {
            // do something
            return mid;
        }
        if (arr[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;
}

var findClosestNumber = function (nums) {
    nums = nums.sort((a, b) => a - b)
    let n = nums.length;
    for (let i = 1; i < n; i++) {
        let a = nums[i - 1]
        let b = nums[i]
        if (b >= 0) {
            if (Math.abs(a) === Math.abs(b)) {
                return b
            }
            if (Math.abs(a) < Math.abs(b)) {
                return a
            }
            return b
        }
    }

    return nums[n - 1]
};
