// Problem: Make Sum Divisible by P
// LeetCode: https://leetcode.com/problems/make-sum-divisible-by-p/
// Language: javascript
// Runtime: 46 ms
// Memory: 84 MB
// Submitted: 2025-12-03

var minSubArrayLen = function (tar, a) {


};

var minSubarray = function (nums, p) {
    let n = nums.length
    let ps = new Array(n)

    for (let i = 0; i < nums.length; i++) {
        ps[i] = ((ps[i - 1] ?? 0) + nums[i]) % p
    }

    let target = ps[n - 1]

    if (target === 0) return 0
    let map = new Map()
    map.set(0, -1);
    let ans = nums.length

    for (let i = 0; i < nums.length; i++) {
        let need = (ps[i] - target + p) % p;

        if (map.has(need))
            ans = Math.min(ans, i - map.get(need));

        map.set(ps[i], i);
    }
    return ans === nums.length ? -1 : ans;
};
