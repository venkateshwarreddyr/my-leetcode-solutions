// Problem: Partition Array According to Given Pivot
// LeetCode: https://leetcode.com/problems/partition-array-according-to-given-pivot/
// Language: javascript
// Runtime: 330 ms
// Memory: 84.3 MB
// Submitted: 2023-05-22

cl = console.log
var pivotArray = function (nums, pivot) {
    let n = nums.length;
    let i = 0, j = n - 1;
    let a = new Array(n);

    for (let k = 0; k < n; k++) {
        // cl(nums[k], nums[n - k - 1])
        if (nums[k] < pivot) {
            a[i++] = nums[k]
        }

        if (nums[n - k - 1] > pivot) {
            a[j--] = nums[n - k - 1]
        }
    }

    while (i <= j) {
        a[i++] = pivot
    }

    return a;
};
