// Problem: Total Characters in String After Transformations I
// LeetCode: https://leetcode.com/problems/total-characters-in-string-after-transformations-i/
// Language: javascript
// Runtime: 249 ms
// Memory: 64.9 MB
// Submitted: 2026-01-14

function lengthAfterTransformations(s, t) {

    const MOD = 1_000_000_007;

    let prev = Array(26).fill(0);

    for (const ch of s) prev[ch.charCodeAt(0) - 97]++;

    for (let i = 1; i <= t; i++) {
        const curr = Array(26).fill(0);

        curr[0] = prev[25];

        curr[1] = (prev[0] + prev[25]) % MOD;

        for (let j = 2; j < 26; j++) {

            curr[j] = prev[j - 1];

        }
        prev = curr
    }

    return prev.reduce((sum, x) => (sum + x) % MOD, 0);

}
