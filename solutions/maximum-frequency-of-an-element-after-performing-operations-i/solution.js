// Problem: Maximum Frequency of an Element After Performing Operations I
// LeetCode: https://leetcode.com/problems/maximum-frequency-of-an-element-after-performing-operations-i/
// Language: javascript
// Runtime: 470 ms
// Memory: 92.9 MB
// Submitted: 2026-01-07

var maxFrequency = function (nums, k, maxPossibleMovementsForNotEqualToVal) {
    nums = nums.slice().sort((a, b) => a - b);
    const n = nums.length;

    const freq = new Map();
    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    const candidateEleOrEdges = new Set();
    for (const num of nums) {
        candidateEleOrEdges.add(num);
        candidateEleOrEdges.add(num - k);
        candidateEleOrEdges.add(num + k);
    }

    let maxFreq = 0;

    for (const val of candidateEleOrEdges) {
        const eleCountTotal = upperBound(nums, val + k) - lowerBound(nums, val - k);
        const eleCountEqualToVal = freq.get(val) || 0;
        const eleCountNotEqualToVal = eleCountTotal - eleCountEqualToVal;

        const eleCountCanBeEqualToVal = Math.min(eleCountNotEqualToVal, maxPossibleMovementsForNotEqualToVal);

        const possibleFreqOfVal = eleCountEqualToVal + eleCountCanBeEqualToVal;
        maxFreq = Math.max(maxFreq, possibleFreqOfVal);
    }

    return maxFreq;
};

function lowerBound(arr, target) {
    const n = arr.length;
    let lo = 0;
    let hi = n;
    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (arr[mid] < target) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    }
    return lo;
}

function upperBound(arr, target) {
    const n = arr.length;
    let lo = 0;
    let hi = n;
    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (arr[mid] <= target) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    }
    return lo;
}

