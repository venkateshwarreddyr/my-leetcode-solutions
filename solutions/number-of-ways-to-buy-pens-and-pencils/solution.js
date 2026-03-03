// Problem: Number of Ways to Buy Pens and Pencils
// LeetCode: https://leetcode.com/problems/number-of-ways-to-buy-pens-and-pencils/
// Language: javascript
// Runtime: 12 ms
// Memory: 56.9 MB
// Submitted: 2026-01-17

var waysToBuyPensPencils = function (totalAmt, cost1, cost2) {
    let total = 0;

    for (let totalPenCost = 0; totalPenCost <= totalAmt; totalPenCost += cost1) {
        const remainingMoney = totalAmt - totalPenCost;

        const maxPencilsPossible = Math.floor(remainingMoney / cost2);

        // we can buy 0, 1, 2...maxPencilsPossible pencils
        const count = maxPencilsPossible + 1;
        total += count;
    }

    return total;
};

