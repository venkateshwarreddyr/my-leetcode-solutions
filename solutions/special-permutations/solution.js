// Problem: Special Permutations
// LeetCode: https://leetcode.com/problems/special-permutations/
// Language: javascript
// Runtime: 264 ms
// Memory: 80.4 MB
// Submitted: 2026-01-18

var specialPerm = function (a) {
    const n = a.length;
    const memo = Array.from({ length: n }, () => Array(1 << n));
    const mod = 10 ** 9 + 7;
 
    const dfs = (pos, mask) => {
        if (mask === (1 << n) - 1) return 1;
        if (memo[pos][mask] !== undefined) return memo[pos][mask];
 
        let sum = 0;
        for (let i = 0; i < n; i++) {
            if (mask & (1 << i)) continue;
            if (i === pos) continue;
 
            // as per question
            if (a[i] % a[pos] === 0 || a[pos] % a[i] === 0) {
                sum += dfs(i, mask | (1 << i));
            }
        }
        return (memo[pos][mask] = sum % mod);
    };
 
    let sum = 0;
    for (let pos = 0; pos < n; pos++) {
        sum += dfs(pos, 1 << pos);
    }
 
    return sum % mod;
};
 
