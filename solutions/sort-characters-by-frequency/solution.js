// Problem: Sort Characters By Frequency
// LeetCode: https://leetcode.com/problems/sort-characters-by-frequency/
// Language: javascript
// Runtime: 80 ms
// Memory: 44.9 MB
// Submitted: 2023-07-13

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    let f = {}
    for (let c of s) f[c] = (f[c] || 0) + 1
    const { PriorityQueue } = require("@datastructures-js/priority-queue");
    const pq = new PriorityQueue({ compare: (a, b) => b[1] - a[1] });

    Object.entries(f).forEach(e => pq.enqueue(e))
    let ns = ""
    while (!pq.isEmpty()) {
        let [k, v] = pq.dequeue()
        ns += (k.repeat(v))
    }

    return ns;
};
