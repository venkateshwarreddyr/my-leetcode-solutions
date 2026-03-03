// Problem: Find Indices of Stable Mountains
// LeetCode: https://leetcode.com/problems/find-indices-of-stable-mountains/
// Language: javascript
// Runtime: 1 ms
// Memory: 52.4 MB
// Submitted: 2024-11-25

/**
 * @param {number[]} height
 * @param {number} threshold
 * @return {number[]}
 */
var stableMountains = function(height, threshold) {
    let an = []

    for(let i = 1; i< height.length; i++) {
        if(height[i-1] > threshold) an.push(i)
    }

    return an
};
