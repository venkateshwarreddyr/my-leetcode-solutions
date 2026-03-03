// Problem: Container With Most Water
// LeetCode: https://leetcode.com/problems/container-with-most-water/
// Language: javascript
// Runtime: 1 ms
// Memory: 64.3 MB
// Submitted: 2025-10-30

var maxArea = function (heights) {
    let n = heights.length
    let maxa = 0
    let l = 0;
    let r = n - 1
    while(l < r) {
        let w = r - l
        let h = Math.min(heights[l], heights[r])
        let a = w * h
        maxa = Math.max(maxa, a)
        if (heights[l] === heights[r]) {
            l++
        } else if (heights[l] < heights[r]) {
            l++
        } else {
            r--
        }
    }
    return maxa
};

