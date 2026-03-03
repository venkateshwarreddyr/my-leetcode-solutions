// Problem: Interval List Intersections
// LeetCode: https://leetcode.com/problems/interval-list-intersections/
// Language: javascript
// Runtime: 115 ms
// Memory: 50.3 MB
// Submitted: 2023-05-22

cl = console.log
var intervalIntersection = function (fl, sl) {
    let m = fl.length;
    let n = sl.length;

    let i = 0, j = 0;
    let an = [];

    while (i < m && j < n) {
        let [a, b] = fl[i]
        let [c, d] = sl[j]
        let [max, min] = [Math.max(a, c), Math.min(b, d)]
        if (max <= min)
            an.push([max, min])
        if (b < d) {
            i++
        } else {
            j++
        } 
    }

    return an;
};
