// Problem: Find Maximum Balanced XOR Subarray Length
// LeetCode: https://leetcode.com/problems/find-maximum-balanced-xor-subarray-length/
// Language: javascript
// Runtime: 902 ms
// Memory: 110.7 MB
// Submitted: 2025-11-23

var maxBalancedSubarray = function (nums) {
    let map = { "0,0": -1 };
    let pxor = 0;
    let bal = 0;
    let maxLen = 0;

    for (let i = 0; i < nums.length; i++) {
        pxor ^= nums[i];

        if (nums[i] % 2 === 0) bal++;
        else bal--;

        let key = pxor + "," + bal;

        if (map.hasOwnProperty(key)) {
            maxLen = Math.max(maxLen, i - map[key]);
        } else {
            map[key] = i;
        }
    }

    return maxLen;
};
