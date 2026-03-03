// Problem: Search in Rotated Sorted Array
// LeetCode: https://leetcode.com/problems/search-in-rotated-sorted-array/
// Language: javascript
// Runtime: 59 ms
// Memory: 42.1 MB
// Submitted: 2023-06-09

cl = console.log
var findMin = function (a) {
    let l = 0;
    let r = a.length - 1;
    while (l < r) {
        let m = Math.floor((l + r) / 2);
        if (a[m] > a[r]) {
            l = m + 1;
        } else {
            r = m;
        }
    }
    return l
};

let bs = (arr, left, right, target) => {
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] == target) {
            // do something
            return mid;
        }
        if (arr[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    // left is the insertion point
    return -1;
};

var search = function (a, target) {
    let m = findMin(a)
    let x = bs(a, 0, m, target)
    let y = bs(a, m, a.length - 1, target)

    return Math.max(x, y)

};
