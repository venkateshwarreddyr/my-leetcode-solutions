// Problem: Find Xor-Beauty of Array
// LeetCode: https://leetcode.com/problems/find-xor-beauty-of-array/
// Language: javascript
// Runtime: 78 ms
// Memory: 51.1 MB
// Submitted: 2023-07-19


var xorBeauty = function (a) {
    // below cancel each other
    // - (0,0,1) with effective value ((1 | 1) & 4) = 0
    // - (1,1,0) with effective value ((4 | 4) & 1) = 0
    // only below are valid
    // - (0,0,0) with effective value ((1 | 1) & 1) = 1
    // - (1,1,1) with effective value ((4 | 4) & 4) = 4 

    let x = 0
    for (let e of a) {
        x ^= e
    }
    return x
}

