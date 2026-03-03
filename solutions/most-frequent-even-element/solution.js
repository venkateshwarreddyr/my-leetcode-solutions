// Problem: Most Frequent Even Element
// LeetCode: https://leetcode.com/problems/most-frequent-even-element/
// Language: javascript
// Runtime: 181 ms
// Memory: 49 MB
// Submitted: 2023-05-24

/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
    let obj = {};
    nums = nums.sort((a, b) => a - b)
    let max = 0
    let an = -1

    for (let num of nums) {
        obj[num] = obj[num] || 0
        obj[num]++

        if (num % 2 === 0) {
            if (obj[num] > max) {
                max = obj[num]
                an = num
            }
        }
    }

    return an;
};
