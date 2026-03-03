// Problem: Maximum Alternating Sum of Squares
// LeetCode: https://leetcode.com/problems/maximum-alternating-sum-of-squares/
// Language: javascript
// Runtime: 32 ms
// Memory: 76.4 MB
// Submitted: 2025-11-29

function maxAlternatingSum(nums) {
    const arr = new Uint32Array(nums.length);
    nums.forEach((e, i) => arr[i] = e * e);
    arr.sort();
    let res = 0, l = 0, r = arr.length - 1;
    while (l <= r) {
        res += arr[r--];
        if (l > r) break;
        res -= arr[l++];
    }
    return res;
}
