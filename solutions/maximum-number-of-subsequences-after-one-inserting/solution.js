// Problem: Maximum Number of Subsequences After One Inserting
// LeetCode: https://leetcode.com/problems/maximum-number-of-subsequences-after-one-inserting/
// Language: javascript
// Runtime: 68 ms
// Memory: 78.7 MB
// Submitted: 2026-01-09

var numOfSubsequences = function (s) {
    let { prefixSumArr: prefixLSumArr } = getPrefixSuffixSumArr(s, ch => ch === 'L');
    let { suffixSumArr: suffixTSumArr } = getPrefixSuffixSumArr(s, ch => ch === 'T');
    cl = console.log;

    let n = s.length;
    let sum = 0;
    let max = 0;
    let lSum = 0;
    let tSum = 0;
    for (let i = 0; i < n; i++) {
        if (s[i] === 'C') {
            sum += prefixLSumArr[i] * suffixTSumArr[i];
            lSum += (1 + prefixLSumArr[i]) * suffixTSumArr[i];
            tSum += prefixLSumArr[i] * (suffixTSumArr[i] + 1);
        } else {
            max = Math.max(max, prefixLSumArr[i] * suffixTSumArr[i]);
        }
    }

    return Math.max(lSum, tSum, sum + max);
};

function getPrefixSuffixSumArr(a, cb) {
    let n = a.length;
    let prefixSum = 0;
    let suffixSum = 0;
    let prefixSumArr = new Array(n);
    let suffixSumArr = new Array(n);

    for (let i = 0, j = n - 1 - i; i < n; i++, j--) {
        prefixSum += cb ? cb(a[i]) : a[i];
        suffixSum += cb ? cb(a[j]) : a[j];
        prefixSumArr[i] = prefixSum;
        suffixSumArr[j] = suffixSum;
    }

    return { prefixSumArr, suffixSumArr };
}

