// Problem: Maximum Score After Binary Swaps
// LeetCode: https://leetcode.com/problems/maximum-score-after-binary-swaps/
// Language: javascript
// Runtime: 98 ms
// Memory: 77.3 MB
// Submitted: 2025-12-20

/**
 * @param {number[]} nums
 * @param {string} s
 * @return {number}
 */
var maximumScore = function (nums, s) {
    let pq = new PriorityQueue((a, b) => b - a);

    let score = 0;
    let n = nums.length
    for (let i = 0; i < n; i++) {
        pq.enqueue(nums[i]);

        if (s[i] === "1") {
            score += pq.dequeue();
        }
    }

    return score
};

