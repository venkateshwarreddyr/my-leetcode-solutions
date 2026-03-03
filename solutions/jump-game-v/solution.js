// Problem: Jump Game V
// LeetCode: https://leetcode.com/problems/jump-game-v/
// Language: javascript
// Runtime: 19 ms
// Memory: 57.1 MB
// Submitted: 2026-01-14

var maxJumps = function (arr, distance) {
    const n = arr.length;
    const dp = new Array(n);
    // can go to smaller values, within distance steps on left or right

    // dfs Max Visits From i
    function dfs(i) {
        if (dp[i] !== undefined) return dp[i];

        let maxVisits = 1; // at least stay here

        // a[i-distance] < a[i] > a[i+distance] can only go to smaller vals only
        // a[L]          < a[i] > a[R]

        // move distance steps to left
        for (let L = i - 1; L >= i - distance && L >= 0; L--) {
            if (arr[L] < arr[i]) {
                maxVisits = Math.max(maxVisits, 1 + dfs(L));
            } else break;
        }
        // move distance steps to right
        for (let R = i + 1; R <= i + distance && R < n; R++) {
            if (arr[R] < arr[i]) {
                maxVisits = Math.max(maxVisits, 1 + dfs(R));
            } else break;
        }

        return (dp[i] = maxVisits);
    }

    let res = 0; // max Visits from every index
    for (let i = 0; i < n; i++) {
        if (dp[i] === undefined) {
            res = Math.max(res, dfs(i));
        }
    }

    return res;
};

