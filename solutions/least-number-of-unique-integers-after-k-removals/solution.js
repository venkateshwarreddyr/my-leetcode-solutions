// Problem: Least Number of Unique Integers after K Removals
// LeetCode: https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/
// Language: javascript
// Runtime: 242 ms
// Memory: 103.6 MB
// Submitted: 2025-11-11

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (a, k) {
    let ob = {}

    for (let e of a) {
        ob[e] = ob[e] || 0
        ob[e]++
    }

    let new_a = Object.entries(ob).sort((a, b) => b[1] - a[1])

    while (k) {
        const [_, v] = new_a.at(-1)

        if (v > k) break
        new_a.pop()
        k -= v
    }

    return new_a.length
};
