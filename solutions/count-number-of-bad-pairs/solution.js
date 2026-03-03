// Problem: Count Number of Bad Pairs
// LeetCode: https://leetcode.com/problems/count-number-of-bad-pairs/
// Language: javascript
// Runtime: 30 ms
// Memory: 76.3 MB
// Submitted: 2026-01-17

// j       - i != nums[j] - nums[i]
// nums[i] - i != nums[j] - j
function countBadPairs(nums) {
    const n = nums.length;
    const freq = new Map(); // same Diff Freq

    for (let i = 0; i < n; i++) {
        const diff = nums[i] - i;
        freq.set(diff, (freq.get(diff) ?? 0) + 1);
    }

    let goodPairs = 0;
    for (let [k, count] of freq) {
        goodPairs += ((count - 1) * count) / 2;
    }

    const totalPairs = (n * (n - 1)) / 2;
    return totalPairs - goodPairs;
}

function countBadPairs_TLE(nums) {
    const n = nums.length;
    let badPairCount = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (j - i !== nums[j] - nums[i]) {
                badPairCount++;
            }
        }
    }

    return badPairCount;
}

