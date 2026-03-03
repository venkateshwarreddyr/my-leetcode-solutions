// Problem: Shuffle an Array
// LeetCode: https://leetcode.com/problems/shuffle-an-array/
// Language: javascript
// Runtime: 18 ms
// Memory: 71.2 MB
// Submitted: 2025-12-01

/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    let original = nums;

    Solution.prototype.reset = function () {
        return original;
    };


    Solution.prototype.shuffle = function () {
        let arr = [...original]
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr
    };

};


/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
