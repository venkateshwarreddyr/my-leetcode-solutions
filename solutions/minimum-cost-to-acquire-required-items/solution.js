// Problem: Minimum Cost to Acquire Required Items
// LeetCode: https://leetcode.com/problems/minimum-cost-to-acquire-required-items/
// Language: javascript
// Runtime: 0 ms
// Memory: 56 MB
// Submitted: 2025-12-28

/**
 * @param {number} cost1
 * @param {number} cost2
 * @param {number} costBoth
 * @param {number} need1
 * @param {number} need2
 * @return {number}
 */
var minimumCost = function (cost1, cost2, costBoth, need1, need2) {
    let ansArr = [];

    let cost = 0;
    cost += cost1 * need1;
    cost += cost2 * need2;
    ansArr.push(cost);

    //
    cost = 0;
    cost += costBoth * Math.max(need1, need2);
    ansArr.push(cost);

    //
    cost = 0;
    cost += costBoth * need1;
    if (need2 > need1) cost += cost2 * (need2 - need1);
    ansArr.push(cost);

        //
    cost = 0;
    cost += costBoth * need2;
    if (need1 > need2) cost += cost1 * (need1 - need2);
    ansArr.push(cost);

    return Math.min(...ansArr);
};

