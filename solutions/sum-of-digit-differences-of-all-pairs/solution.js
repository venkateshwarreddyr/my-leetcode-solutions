// Problem: Sum of Digit Differences of All Pairs
// LeetCode: https://leetcode.com/problems/sum-of-digit-differences-of-all-pairs/
// Language: javascript
// Runtime: 22 ms
// Memory: 68 MB
// Submitted: 2026-01-17

var sumDigitDifferences = function (nums) {
    const n = nums.length;   // 13 23 12
    // no pair
    if (n <= 1) return 0;

    const m = ('' + nums[0]).length; // 13 => 2
    let total = 0; // different digit pair count

    // for each  index position  // 0,1 in 13
    for (let j = 0; j < m; j++) {
        const freq = new Array(10).fill(0);

        // for all numbers   at index position (j)
        for (let i = 0; i < n; i++) {
            const jthDigitFromReverse = Math.floor(nums[i] / 10 ** j) % 10;
            freq[jthDigitFromReverse]++;
        }

        // same digit pair count
        let sameDigitPairs = 0;
        for (let d = 0; d <= 9; d++) {
            sameDigitPairs += (freq[d] * (freq[d] - 1)) / 2;
        }

        // at j (m-1-j) index
        const totalPairs = (n * (n - 1)) / 2;
        let diffDigitPairsAtI = totalPairs - sameDigitPairs;
        total += diffDigitPairsAtI
    }

    return total;
};

