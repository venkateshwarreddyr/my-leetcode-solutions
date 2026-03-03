// Problem: Longest Common Prefix Between Adjacent Strings After Removals
// LeetCode: https://leetcode.com/problems/longest-common-prefix-between-adjacent-strings-after-removals/
// Language: javascript
// Runtime: 63 ms
// Memory: 85.8 MB
// Submitted: 2026-01-05

function getPrefixMaxArray(arr) {
    const n = arr.length;
    const prefixMax = new Array(n);
    let runningMax = 0;

    for (let i = 0; i < n; i++) {
        runningMax = Math.max(runningMax, arr[i]);
        prefixMax[i] = runningMax;
    }
    return prefixMax;
}

function getSuffixMaxArray(arr) {
    const n = arr.length;
    const suffixMax = new Array(n);
    let runningMax = 0;

    for (let i = n - 1; i >= 0; i--) {
        runningMax = Math.max(runningMax, arr[i]);
        suffixMax[i] = runningMax;
    }
    return suffixMax;
}

function getCommonPrefixLength(s, t) {
    const minLen = Math.min(s.length, t.length);
    let i = 0;
    for (; i < minLen && s[i] === t[i]; i++) { }
    return i;
}

function getAdjacentCommonPrefixLengths(words) {
    const n = words.length;
    const adjLCPLens = new Array(Math.max(0, n - 1));
    for (let i = 0; i + 1 < n; i++) {
        adjLCPLens[i] = getCommonPrefixLength(words[i], words[i + 1]);
    }
    return adjLCPLens;
}

var longestCommonPrefix = function (words) {
    const n = words.length;
    const res = new Array(n).fill(0);

    const adjLCPLens = getAdjacentCommonPrefixLengths(words); // length n-1
    const prefixMaxAdjLCPLens = getPrefixMaxArray(adjLCPLens);
    const suffixMaxAdjLCPLens = getSuffixMaxArray(adjLCPLens);

    // i = removed Index
    for (let i = 0; i < n; i++) {
        const leftMax = prefixMaxAdjLCPLens[i - 2] ?? 0;
        const rightMax = suffixMaxAdjLCPLens[i + 1] ?? 0;

        let newAdjLCPLen = 0;
        if (i - 1 >= 0 && i + 1 < n) {
            newAdjLCPLen = getCommonPrefixLength(words[i - 1], words[i + 1]);
        }

        res[i] = Math.max(leftMax, newAdjLCPLen, rightMax);
    }

    return res;
};

