// Problem: Find Score of an Array After Marking All Elements
// LeetCode: https://leetcode.com/problems/find-score-of-an-array-after-marking-all-elements/
// Language: javascript
// Runtime: 377 ms
// Memory: 93.3 MB
// Submitted: 2025-11-10

/**
 * @param {number[]} nums
 * @return {number}
 */
var findScore = function (a) {
    const pq = new PriorityQueue((a, b) => (a[0] - b[0]) || (a[1] - b[1]));
    let n = a.length
    for (let i = 0; i < n; i++) {
        pq.enqueue([a[i], i])
    }
    let ans = 0
    while (!pq.isEmpty()) {
        const [v, i] = pq.dequeue()
        if (a[i] !== -1) {
            ans += v
            a[i] = -1
            if (i - 1 >= 0) {
                a[i - 1] = -1
            }
            if (i + 1 < n) {
                a[i + 1] = -1
            }
        }
    }

    return ans
};

