// Problem: Count the Number of Fair Pairs
// LeetCode: https://leetcode.com/problems/count-the-number-of-fair-pairs/
// Language: javascript
// Runtime: 193 ms
// Memory: 70.4 MB
// Submitted: 2025-10-21

function lower_bound_eg(arr, target, L = 0, R = arr.length) {
    while (L < R) {
        let mid = ~~(L / 2 + R / 2);

        arr[mid] < target ? (L = mid + 1) : (R = mid);
    }

    return L;
}

var countFairPairs = function (a, lower, upper) {
    a.sort((a, b) => a - b)
    let n = a.length
    let cc = 0
    for (let i = 0; i < n; i++) {
        const lbv = lower_bound_eg(a, lower - a[i], i + 1, a.length)
        const ubv = lower_bound_eg(a, upper - a[i] + 1, i + 1, a.length)

        cc += (ubv - lbv)
    }

    return cc
};
