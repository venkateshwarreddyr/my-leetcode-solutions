// Problem: Reformat Phone Number
// LeetCode: https://leetcode.com/problems/reformat-phone-number/
// Language: javascript
// Runtime: 61 ms
// Memory: 42.1 MB
// Submitted: 2023-05-23

cl = console.log
var reformatNumber = function (nums) {
    nums = nums.split('').filter(e => e !== ' ' && e !== '-')
    let n = nums.length;
    let an = ''
    let x = 3
    let mmod = n % 3
    let j = 0
    for (let i = n - 1; i > -1; i--) {
        if (mmod === 2 && (j === 2 || (j > 2 && (j - 2) % 3 === 0))) {
            an = '-' + an;
        } else if (mmod === 1 && (j === 4 || j === 2 || (j > 4 && (j - 4) % 3 === 0))) {
            an = '-' + an;
        } else if (mmod === 0 && j % 3 === 0 && an) {
            an = '-' + an;
        }
        an = nums[i] + an;
        j++
    }
    return an;
};
