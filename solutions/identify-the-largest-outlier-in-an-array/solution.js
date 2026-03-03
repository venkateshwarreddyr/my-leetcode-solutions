// Problem: Identify the Largest Outlier in an Array
// LeetCode: https://leetcode.com/problems/identify-the-largest-outlier-in-an-array/
// Language: javascript
// Runtime: 204 ms
// Memory: 74.3 MB
// Submitted: 2026-01-01

function getFrequencyMap(a) {
    let freq = {};
    for (let e of a) {
        freq[e] = freq[e] ?? 0;
        freq[e]++;
    }
    return freq;
}

var getLargestOutlier = function (nums) {
    const freqMap = getFrequencyMap(nums);

    let totalSum = 0;
    for (let num of nums) {
        totalSum += num;
    }

    let maxO = -Infinity;
    for (let O of nums) {
        const remainingValue = totalSum - O;
        if (remainingValue % 2 !== 0) continue;

        const S = remainingValue / 2;
        if (S in freqMap) {
            if (S === O) {
                if (freqMap[S] >= 2) {
                    maxO = Math.max(maxO, O);
                }
            } else {
                maxO = Math.max(maxO, O);
            }
        }
    }

    return maxO;
};
