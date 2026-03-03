// Problem: 3Sum Closest
// LeetCode: https://leetcode.com/problems/3sum-closest/
// Language: javascript
// Runtime: 11 ms
// Memory: 57.5 MB
// Submitted: 2025-12-25

var threeSumClosest = function (a, target) {
    a.sort((a, b) => a - b);

    let minDiff_sum = Infinity;
    let minDiff = Infinity;

    for (let i = 0; i < a.length; i++) {
        let lo = i + 1, hi = a.length - 1;

        while (lo < hi) {
            let sum = a[i] + a[lo] + a[hi];
            if (sum === target) return target

            let diff = Math.abs(sum - target);
            if (diff < minDiff) {
                minDiff = diff;
                minDiff_sum = sum;
            }

            if (sum > target) hi--;
            else lo++;
        }
    }

    return minDiff_sum;
};

