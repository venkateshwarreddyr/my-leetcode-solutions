// Problem: Partition Array Into Three Parts With Equal Sum
// LeetCode: https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/
// Language: javascript
// Runtime: 2 ms
// Memory: 60.3 MB
// Submitted: 2026-02-04

/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function (a) {
    let i = 0,
        j = a.length - 1,
        lSum = a[i],
        rSum = a[j],
        midSum = a.reduce((acc, e) => acc + e, 0) - lSum - rSum;

    while (i + 1 < j) {
        if (lSum == midSum && midSum == rSum) return true;

        // straight forward conditions
        if (2 * lSum < midSum + rSum) (lSum += a[++i]), (midSum -= a[i]);
        else if (2 * rSum < lSum + midSum) (rSum += a[--j]), (midSum -= a[j]);
        // reverse conditions
        else if (lSum < rSum) (rSum += a[--j]), (midSum -= a[j]);
        else (lSum += a[++i]), (midSum -= a[i]);
    }

    return false;
};

