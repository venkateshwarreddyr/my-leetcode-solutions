// Problem: Single Element in a Sorted Array
// LeetCode: https://leetcode.com/problems/single-element-in-a-sorted-array/
// Language: javascript
// Runtime: 51 ms
// Memory: 44.6 MB
// Submitted: 2023-07-01

cl = console.log
function bs(a, lo = 0, hi = a.length - 1) {
    while (lo <= hi) {
        let mid = Math.trunc(lo / 2 + hi / 2)

        if (mid % 2 === 1) {
            mid--
        }
        if (a[mid] !== a[mid + 1] && a[mid] !== a[mid - 1]) return a[mid]
        if (a[mid] === a[mid + 1]) {
            lo = mid + 2
        } else if (a[mid] !== a[mid + 1]) {
            hi = mid
        }

    }
}

var singleNonDuplicate = function (a) {
    return bs(a)
};
/*
1,1,2,2,3,3,4,8,8
0,1,2,3,4,5,6,7,8

1,1,2,3,3,4,4,8,8
0,1,2,3,4,5,6,7,8
 */
