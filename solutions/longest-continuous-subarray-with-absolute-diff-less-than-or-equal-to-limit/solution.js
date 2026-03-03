// Problem: Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit
// LeetCode: https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/
// Language: javascript
// Runtime: 232 ms
// Memory: 86.5 MB
// Submitted: 2025-12-02

/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    let i = 0
    const minh = new MinPriorityQueue()
    const maxh = new MaxPriorityQueue()
    const removeMin = new Map()
    const removeMax = new Map()

    function inc(map, key) {
        map.set(key, (map.get(key) || 0) + 1)
    }

    function dec(map, key) {
        map.set(key, map.get(key) - 1)
    }

    function has(map, key) {
        return map.get(key) > 0
    }

    let ans = 0

    for (let j = 0; j < nums.length; j += 1) {
        minh.enqueue(nums[j])
        maxh.enqueue(nums[j])
        while (maxh.front() - minh.front() > limit) {
            inc(removeMin, nums[i])
            inc(removeMax, nums[i])
            i += 1
            while (has(removeMin, minh.front())) {
                dec(removeMin, minh.front())
                minh.dequeue()
            }
            while (has(removeMax, maxh.front())) {
                dec(removeMax, maxh.front())
                maxh.dequeue()
            }
        }

        ans = Math.max(ans, j - i + 1)
    }

    return ans
};
