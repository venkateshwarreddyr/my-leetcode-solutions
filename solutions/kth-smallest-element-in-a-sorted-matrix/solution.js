// Problem: Kth Smallest Element in a Sorted Matrix
// LeetCode: https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/
// Language: javascript
// Runtime: 73 ms
// Memory: 45.1 MB
// Submitted: 2023-07-16

var kthSmallest = function (g, k) {
    const m = g.length;
    const n = g[0].length;

    const ccLessThanOrEqual = target => {
        let cc = 0
        for (let r = 0; r < m; r++) {
            if (g[r][n - 1] <= target) {
                cc += n
            } else {
                if (g[r][0] > target) break
                for (let c = 0; (c < n) && (g[r][c] <= target); c++) {
                    cc += 1
                }
            }
        }
        return cc
    };

    let lo = g[0][0], hi = g[m - 1][n - 1]
    while (lo <= hi) {
        let mid = Math.trunc(lo / 2 + hi / 2)
        if (ccLessThanOrEqual(mid) < k) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return lo;
};
