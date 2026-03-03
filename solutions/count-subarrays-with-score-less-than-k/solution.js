// Problem: Count Subarrays With Score Less Than K
// LeetCode: https://leetcode.com/problems/count-subarrays-with-score-less-than-k/
// Language: javascript
// Runtime: 102 ms
// Memory: 61.6 MB
// Submitted: 2023-11-10

cl = console.log

function getPrefixArray(a) {
    let prefixSum = new Array(a.length);
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i];
        prefixSum[i] = sum;
    }

    return prefixSum;
}

var countSubarrays = function (nums, k) {
    let n = nums.length

    let ps = getPrefixArray(nums)

    let cc = 0
    let i = n - 1, j = n - 2

    while (i > -1) {
        while (j >= -1 && (ps[i] - (ps[j] ?? 0)) * (i - j) < k) {
            j--
        }

        cc += (i - j - 1)
        i--
    }

    return cc
};
