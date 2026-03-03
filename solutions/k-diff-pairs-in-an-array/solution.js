// Problem: K-diff Pairs in an Array
// LeetCode: https://leetcode.com/problems/k-diff-pairs-in-an-array/
// Language: javascript
// Runtime: 10 ms
// Memory: 58.2 MB
// Submitted: 2026-01-03

var findPairs = function (a, k) {
    if (a.length < 2) return 0;

    a.sort((a, b) => a - b);

    let set = new Set();
    let count = 0;

    for (let i = 0; i < a.length; i++) {
        if (set.has(a[i])) continue; // same source will generate dups
        set.add(a[i]);

        let target = a[i] + k; // target pair element

        let lo = i + 1;
        let hi = a.length - 1;
        while (lo <= hi) {
            let mid = lo + Math.trunc((hi - lo) / 2);
            if (a[mid] === target) {
                count++;
                break; // same targets will generate dups
            } else if (a[mid] < target) {
                lo = mid + 1;
            } else if (a[mid] > target) {
                hi = mid - 1;
            }
        }
    }

    return count;
};

