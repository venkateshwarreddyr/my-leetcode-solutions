// Problem: Largest Number At Least Twice of Others
// LeetCode: https://leetcode.com/problems/largest-number-at-least-twice-of-others/
// Language: javascript
// Runtime: 52 ms
// Memory: 42.2 MB
// Submitted: 2023-05-30

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
    const secondHighest = function (s) {
        let max1 = -1,
            max2 = -1;
        for (const c of s) {
            if (c > max1) {
                max2 = max1;
                max1 = c;
            } else if (c > max2 && c < max1) {
                max2 = c;
            }
        }
        return { max1, max2 };
    };
    let { max1, max2 } = secondHighest(nums)

    if (max1 >= 2 * max2) {
        return nums.indexOf(max1)
    }

    return -1;
};
