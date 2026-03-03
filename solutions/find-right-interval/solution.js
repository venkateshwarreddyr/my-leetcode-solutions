// Problem: Find Right Interval
// LeetCode: https://leetcode.com/problems/find-right-interval/
// Language: javascript
// Runtime: 390 ms
// Memory: 86.7 MB
// Submitted: 2023-06-28

cl = console.log
function bins_ori(a, tar, lo = 0, hi = a.length - 1) {
    while (lo <= hi) {
        let mid = Math.trunc(lo / 2 + hi / 2)
        if (a[mid][0] === tar) {
            return mid //           found
        } else if (a[mid][0] < tar) {
            lo = mid + 1 //         tar on right
        } else {
            hi = mid - 1 //         tar on left
        }
    }
    cl({lo, hi})
    return lo === a.length ? -1 : lo //                  not found
}

var findRightInterval = function (intervals) {
    let n_intervals = intervals.map((e, i) => [...e, i]).sort((a, b) => a[0] - b[0]);

    return intervals.map(a => {
        let ind = bins_ori(n_intervals, a[1]);
        cl(ind)
        if (ind > -1) return n_intervals[ind][2];
        return -1;
    })
};
// 1,2,3,5,6,7
