// Problem: Longest Non-Decreasing Subarray After Replacing at Most One Element
// LeetCode: https://leetcode.com/problems/longest-non-decreasing-subarray-after-replacing-at-most-one-element/
// Language: javascript
// Runtime: 38 ms
// Memory: 81.6 MB
// Submitted: 2025-12-24

var longestSubarray = function (a) {
    const n = a.length;
    if (n === 1) return 1;

    const prefixLen = new Array(n).fill(1); // prefix NonDecreasing Length
    for (let i = 1; i < n; i++) {
        if (a[i - 1] <= a[i]) {
            prefixLen[i] = prefixLen[i - 1] + 1;
        }
    }

    const suffixLen = new Array(n).fill(1); // suffix NonDecreasing Length
    for (let j = n - 2; j >= 0; j--) {
        if (a[j] <= a[j + 1]) {
            suffixLen[j] = suffixLen[j + 1] + 1;
        }
    }

    let maxLen = 1;
    for (let i = 0; i < n; i++) {
        let newLen = 0; // length AfterReplacement
        if (i === 0) {
            newLen = 1 + suffixLen[i + 1];
        } else if (i === n - 1) {
            newLen = prefixLen[i - 1] + 1;
        } else {
            if (a[i - 1] <= a[i + 1]) {
                newLen = prefixLen[i - 1] + 1 + suffixLen[i + 1];
            } else {
                newLen = Math.max(prefixLen[i - 1], suffixLen[i + 1]) + 1;
            }
        }
        maxLen = Math.max(maxLen, newLen);
    }

    return maxLen;
};


var longestSubarray_old22222 = function (a) {
    if (a.length <= 2) return a.length;
    a.unshift(Infinity);
    let i = 0,
        j = 1;
    let diff = 0;
    let n = a.length;
    let max = 1;

    let tempIndex = -1;
    let tempValue = null;
    for (; j < n; j++) {
        console.log(a)
        if (a[j - 1] <= a[j]) {
            max = Math.max(max, j - i + 1);
            continue;
        }
        if (diff === 0) {
            max = Math.max(max, j - i + 1);
            tempIndex = j;
            tempValue = a[j];
            a[j] = a[j - 1];
            diff++;
            continue;
        }
        if (tempIndex >= 0) {
            a[tempIndex] = tempValue;
            tempIndex = -1;
        }

        j--;
        i++;
        while (a[i - 1] <= a[i] && i < j) {
            i++;
        }

        diff = 0;
    }

    return max;
};

var longestSubarray_old11111 = function (a) {
    if (a.length <= 2) return a.length;
    a.unshift(Infinity);
    a.unshift(Infinity);

    let i = 0,
        j = 1;
    let diff = 0;
    let n = a.length;
    let max = 0;

    let tempIndex = -1;
    let tempValue = null;
    for (; j < n; j++) {
        if (a[j - 1] <= a[j]) {
            max = Math.max(max, j - i + 1);
            continue;
        }
        if (diff === 0) {
            max = Math.max(max, j - i + 1);
            tempIndex = j;
            tempValue = a[j];
            a[j] = a[j - 1] ?? a[j + 1];
            diff++;
            continue;
        }
        if (tempIndex >= 0) {
            a[tempIndex] = tempValue;
            tempIndex = -1;
        }

        j--;
        i++;
        while (a[i - 1] <= a[i] && i < j) {
            i++;
        }

        diff = 0;
    }

    return max;
};

