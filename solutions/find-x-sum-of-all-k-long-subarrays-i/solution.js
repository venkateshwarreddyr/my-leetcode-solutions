// Problem: Find X-Sum of All K-Long Subarrays I
// LeetCode: https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-i/
// Language: javascript
// Runtime: 18 ms
// Memory: 61 MB
// Submitted: 2025-11-04

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findXSum = function (a, k, x) {
    const r = [];
    const o = {};
    let i = 0;
    for (const rEle of a) {
        o[rEle] = (o[rEle] || 0) + 1;
        if (i >= k) {
            const lEle = a[i - k];
            o[lEle] = (o[lEle] || 0) - 1;
        }
        if (i >= k - 1) {
            const sum = Object.entries(o)
                .sort((a, b) => b[1] - a[1] || +b[0] - +a[0])
                .slice(0, x)
                .reduce((sum, e) => sum + +e[0] * +e[1], 0);
            r.push(sum);
        }
        i++;
    }
    return r;
};

// You are given an array nums of n integers and two integers k and x.

// The x-sum of an array is calculated by the following procedure:
// {} - top freq
// Count the occurrences of all elements in the array.
// Keep only the occurrences of the top x most frequent elements. If two elements have the same number of occurrences, the element with the bigger value is considered more frequent.
// Calculate the sum of the resulting array.
// Note that if an array has less than x distinct elements, its x-sum is the sum of the array.

// Return an integer array answer of length n - k + 1 where answer[i] is the x-sum of the subarray nums[i..i + k - 1].
