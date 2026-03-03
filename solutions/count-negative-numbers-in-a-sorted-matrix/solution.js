// Problem: Count Negative Numbers in a Sorted Matrix
// LeetCode: https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/
// Language: javascript
// Runtime: 72 ms
// Memory: 44.1 MB
// Submitted: 2023-07-02

cl = console.log
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
    let m = grid.length;
    let n = grid[0].length;

    function lower_bound_fe_or_fg(a, tar, lo = 0, hi = a.length - 1) {
        while (lo <= hi) {
            let mid = Math.trunc(lo / 2 + hi / 2)
            // if (mid === tar) {   // a is not there
            // if (a[mid] === a[mid-1]) {  // tar is there
            if (a[mid] === tar) {
                // a is there
                hi = mid - 1 //       tar on left/current
                // return mid //           found
                // } else if (mid < tar) {
            } else if (a[mid] < tar) {
                lo = mid + 1 //         tar on right
            } else {
                hi = mid - 1 //     mid-1    tar on left
            }
        }
        return lo //                     found
    }

    let an = 0
    for (let a of grid) {
        a.reverse()
        let j = lower_bound_fe_or_fg(a, 0);
        an += (j)
    }

    return an;
};
