// Problem: Special Array With X Elements Greater Than or Equal X
// LeetCode: https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/
// Language: javascript
// Runtime: 63 ms
// Memory: 42.4 MB
// Submitted: 2023-05-26

cl = console.log

var specialArray = function (nums) {
    nums = nums.sort((a, b) => a - b)
    let binarySearch = (arr, target) => {
        let left = 0;
        let right = arr.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] >= target && (mid - 1 === -1 || arr[mid - 1] < target)) {
                // do something
                return mid;
            }
            if (arr[mid] >= target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        // left is the insertion point
        return left;
    }
    let n = nums.length;
    let an = -1;
    for (let i = 1; i <= 100; i++) {
        let c = binarySearch(nums, i)
        // cl({ c, i }, n - c)
        if (c > -1 && i === n - c) {
            an = Math.max(i, an)
        }
    }

    return an;
};
