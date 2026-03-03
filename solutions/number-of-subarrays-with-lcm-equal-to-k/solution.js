// Problem: Number of Subarrays With LCM Equal to K
// LeetCode: https://leetcode.com/problems/number-of-subarrays-with-lcm-equal-to-k/
// Language: javascript
// Runtime: 85 ms
// Memory: 42.4 MB
// Submitted: 2023-06-08

cl = console.log
const gcd = (a, b) => a ? gcd(b % a, a) : b;

const LCM = (a, b) => a * b / gcd(a, b);
var subarrayLCM = function (nums, k) {
    let cc = 0;
    for (let i = 0; i < nums.length; i++) {
        let lcmm = nums[i];
        if (lcmm == k) cc++;
        for (let j = i + 1; j < nums.length; j++) {
            lcmm = LCM(lcmm, nums[j])
            if (lcmm === k) {
                cc++
            } else if (lcmm > k) {
                break
            }
        }
    }


    return cc
};
