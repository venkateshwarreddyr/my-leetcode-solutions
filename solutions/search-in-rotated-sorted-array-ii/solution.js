// Problem: Search in Rotated Sorted Array II
// LeetCode: https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
// Language: javascript
// Runtime: 0 ms
// Memory: 53.2 MB
// Submitted: 2025-12-30

function binarySearch(target, arr, left = 0, right = arr.length - 1) {
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);

        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }

    return -1;
}

var search = function (a, x) { // nums, target
    let n = a.length;
    if (n === 0) return false;

    let ipivot = -1;
    for (let i = 0; i < n - 1; i++) {
        if (a[i] > a[i + 1]) {
            ipivot = i;
            break;
        }
    }

    // 2 parts
    let i1 = binarySearch(x, a, 0, ipivot);
    let i2 = binarySearch(x, a, ipivot + 1, n - 1);
    if ((i1 !== -1) || (i2 !== -1)) return true;
    return false;
};

