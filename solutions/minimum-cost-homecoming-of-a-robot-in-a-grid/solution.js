// Problem: Minimum Cost Homecoming of a Robot in a Grid
// LeetCode: https://leetcode.com/problems/minimum-cost-homecoming-of-a-robot-in-a-grid/
// Language: javascript
// Runtime: 84 ms
// Memory: 55.1 MB
// Submitted: 2023-07-17

var minCost = function (startPos, homePos, rowCosts, colCosts) {
    let [rs, cs] = startPos
    let [re, ce] = homePos
    let totalw = 0;

    for (let r = rs, c = cs; ;) {
        if (re !== r) {
            re > r ? r++ : r--;
            totalw += rowCosts[r];
        } else if (c !== ce) {
            ce > c ? c++ : c--;
            totalw += colCosts[c];
        } else break;
    }
    return totalw;
};
