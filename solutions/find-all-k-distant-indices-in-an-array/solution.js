// Problem: Find All K-Distant Indices in an Array
// LeetCode: https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/
// Language: javascript
// Runtime: 174 ms
// Memory: 49.6 MB
// Submitted: 2023-05-25

cl = console.log
var findKDistantIndices = function (nums, key, k) {
    let n = nums.length;
    let an = []

    for (let i = 0; i < n; i++) {
        for (let j = Math.max(0, i - k); j <= Math.min(n, i + k); j++) {
            if (nums[j] === key) {
                an.push(i)
                break;
            }
        }
        cl()
    }

    return an;

};
// [0,1,2,3,4,5,6,7,8,9]
// [1,2,3,4,5,6,7,8,9,10]

