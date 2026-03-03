// Problem: IPO
// LeetCode: https://leetcode.com/problems/ipo/
// Language: javascript
// Runtime: 249 ms
// Memory: 86 MB
// Submitted: 2024-06-15

/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function (k, w, profits, capital) {
    let pr_cap = profits.map((e, i) => [e, capital[i]]).sort((a, b) => a[1] - b[1])

    const { PriorityQueue } = require("@datastructures-js/priority-queue");
    const pq = new PriorityQueue({ compare: (a, b) => b - a }); // decreasing

    let i = 0
    while (k--) {
        while (pr_cap[i] && w >= pr_cap[i][1]) {
            pq.enqueue(pr_cap[i][0])
            i++
        }

        w += pq.dequeue()
    }

    return w
};
/**
max profit when capital is 0
max profit when capital is 1
max profit when capital is 2
max profit when capital is 3

 */
