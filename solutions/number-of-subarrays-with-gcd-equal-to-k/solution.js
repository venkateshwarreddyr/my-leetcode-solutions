// Problem: Number of Subarrays With GCD Equal to K
// LeetCode: https://leetcode.com/problems/number-of-subarrays-with-gcd-equal-to-k/
// Language: javascript
// Runtime: 2576 ms
// Memory: 48.6 MB
// Submitted: 2022-10-23

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */



var subarrayGCD = function (nums, k) {
    let counter = 0;
function gcd(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number'))
        return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while (y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}
    const findGCD = (arr, n) => {
        
        let result = arr[0];
        for (let i = 1; i < n; i++) {
            result = gcd(arr[i], result);

            if (result == 1) {
                return 1;
            }
        }
        return result;
    }
    const calcfunc = (m) => {
        for (let i = 0; (i+m) <= nums.length; i++) {
                if (findGCD(nums.slice(i, i + m ), m ) === k) {
                    counter++;
                }
           
        }
    }
    for (let i = 0; i < nums.length; i++) {
        calcfunc(i + 1)
    }
    return counter;
};

