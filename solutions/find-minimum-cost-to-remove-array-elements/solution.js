// Problem: Find Minimum Cost to Remove Array Elements
// LeetCode: https://leetcode.com/problems/find-minimum-cost-to-remove-array-elements/
// Language: javascript
// Runtime: 253 ms
// Memory: 88.8 MB
// Submitted: 2026-01-18

var minCost = function (nums) {
    const n = nums.length;
    const memo = Array.from({ length: n + 1 }, () => new Int32Array(n + 1).fill(-1));

    function getMinCost(nums, idx, carriedIdx, memo) {
        const n = nums.length;

        if (idx >= n) return nums[carriedIdx];
        if (idx === n - 1) return Math.max(nums[carriedIdx], nums[idx]);
        if (memo[idx][carriedIdx] !== -1) return memo[idx][carriedIdx];

        const opt1 = Math.max(nums[idx], nums[idx + 1]) + getMinCost(nums, idx + 2, carriedIdx, memo);
        const opt2 = Math.max(nums[carriedIdx], nums[idx + 1]) + getMinCost(nums, idx + 2, idx, memo);
        const opt3 = Math.max(nums[carriedIdx], nums[idx]) + getMinCost(nums, idx + 2, idx + 1, memo);

        const result = Math.min(opt1, opt2, opt3);
        memo[idx][carriedIdx] = result;
        return result;
    }

    return getMinCost(nums, 1, 0, memo);

};


var minCost = function (nums) {
    const n = nums.length;
    const memo = new Int32Array(n * n).fill(-1);

    const solve = (i, p) => {
        if (i >= n) return nums[p];
        if (i === n - 1) return nums[p] > nums[i] ? nums[p] : nums[i];

        const key = i * n + p;
        if (memo[key] !== -1) return memo[key];

        const cost1 = (nums[p] > nums[i] ? nums[p] : nums[i]) + solve(i + 2, i + 1);
        const cost2 = (nums[p] > nums[i + 1] ? nums[p] : nums[i + 1]) + solve(i + 2, i);
        const cost3 = (nums[i] > nums[i + 1] ? nums[i] : nums[i + 1]) + solve(i + 2, p);

        const res = Math.min(cost1, cost2, cost3);
        memo[key] = res;
        return res;
    };

    return solve(1, 0);
};
