// Problem: Earliest Finish Time for Land and Water Rides I
// LeetCode: https://leetcode.com/problems/earliest-finish-time-for-land-and-water-rides-i/
// Language: javascript
// Runtime: 1 ms
// Memory: 58.6 MB
// Submitted: 2025-10-12

function process(lst, ld, wst, wd) {
    let n = lst.length;
    let minLET = Infinity; // minumum land end time
    for (let i = 0; i < n; i++) {
        minLET = Math.min(minLET, lst[i] + ld[i]);
    }

    let m = wst.length;
    let minWET = Infinity; // minimum water end time
    // pick water ride that already started
    for (let i = 0; i < m; i++) {
        if (wst[i] <= minLET) {
            minWET = Math.min(minWET, minLET + wd[i]);
        }
    }

    // waiting for water ride to start
    for (let i = 0; i < m; i++) {
        if (wst[i] > minLET) {
            minWET = Math.min(minWET, wst[i] + wd[i]);
        }
    }
    return minWET;
}

var earliestFinishTime = function (lst, ld, wst, wd) {
    let min1 = process(lst, ld, wst, wd);
    let min2 = process(wst, wd, lst, ld);
    return Math.min(min1, min2);
};
