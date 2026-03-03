// Problem: Maximize Win From Two Segments
// LeetCode: https://leetcode.com/problems/maximize-win-from-two-segments/
// Language: javascript
// Runtime: 26 ms
// Memory: 65.4 MB
// Submitted: 2025-12-18

var maximizeWin = function (prizePositions, k) {
    const n = prizePositions.length;

    // dp[R] = max prizes from one segment ending at or before index R
    const dp = new Array(n).fill(0);
    let max2SegTotalPrizes = 0;

    let left = 0;
    for (let right = 0; right < n; right++) {
        while (prizePositions[left] < prizePositions[right] - k) left++;

        const currSegSum = right - left + 1;
        const prevMaxSegSum = (dp[left - 1] ?? 0)
        max2SegTotalPrizes = Math.max(max2SegTotalPrizes, prevMaxSegSum + currSegSum);
        dp[right] = Math.max(dp[right - 1] ?? 0, currSegSum);
    }

    return max2SegTotalPrizes;
};

var maximizeWin2222222 = function (prizePositions, k) {
    let maax = prizePositions.reduce((a, c) => c > a ? c : a, 0)
    let miin = prizePositions.reduce((a, c) => c > a ? a : c, Infinity)
    let arr = new Array(maax + 1).fill(0);

    prizePositions.forEach(e => {
        arr[e]++;
    });

    let ans = [0];
    for (let i = miin; i <= maax; i++) {
        ans.push(0)
        for (let j = i; j <= i + k && j <= maax; j++) {
            ans[i] += arr[j]
        }
    }

    ans = ans.filter(e => e || !isNaN(e)).sort((a, b) => b - a);
    console.log(ans, arr);

    if (ans[0] + ans[1] > prizePositions.length) {
        return prizePositions.length;
    }

    return ans[0] + ans[1]

};
