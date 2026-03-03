// Problem: Maximum Possible Number by Binary Concatenation
// LeetCode: https://leetcode.com/problems/maximum-possible-number-by-binary-concatenation/
// Language: javascript
// Runtime: 66 ms
// Memory: 51.8 MB
// Submitted: 2024-10-06

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxGoodNumber = function (nums) {
    // let s = nums.reduce((a, c) => a + c.toString(2), '');
    // let s1 = nums.reverse.reduce((a, c) => a + c.toString(2), '');
    // let s2 = nums.reduce((a, c) => a + c.toString(2), '');

    // // s = s.split('').sort((a, b) => b - a).join('')
    // console.log
    // return Math.max(parseInt(s, 2),parseInt(s2, 2),parseInt(s2, 2))

    let res = [];

    function approach1Fn(arr, start) {
        if (start === arr.length - 1) {
            res.push([...arr]);
            return;
        }
        for (let i = start; i < arr.length; i++) {
            [arr[start], arr[i]] = [arr[i], arr[start]];
            approach1Fn(arr, start + 1);
            [arr[start], arr[i]] = [arr[i], arr[start]];
        }
    }
approach1Fn(nums, 0)

    return Math.max(...res
        .map(num =>
            num.reduce((a, c) => a + c.toString(2), '')
        ).map(e => parseInt(e, 2))
    );
};
