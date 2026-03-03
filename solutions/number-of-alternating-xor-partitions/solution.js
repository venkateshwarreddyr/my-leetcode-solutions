// Problem: Number of Alternating XOR Partitions
// LeetCode: https://leetcode.com/problems/number-of-alternating-xor-partitions/
// Language: javascript
// Runtime: 2709 ms
// Memory: 144.9 MB
// Submitted: 2026-01-17

cl = console.log;
var alternatingXOR = function (nums, target1, target2) {
    let mod = 10 ** 9 + 7;
    let a = nums;
    let n = nums.length;
    let memo = new Map();
    function dfs(i, xor, t) {
        let key = `${i}, ${xor}, ${t}`;
        // cl(key);
        if (i === n) {
            if (t === target1) {
                if (target1 === xor) return 1;
            } else {
                if (target2 === xor) return 1;
            }
            return 0;
        }
        if (memo.has(key)) return memo.get(key);
        // xor ^= a[i];
        let ans = 0;
        if (t === target1) {
            if (target1 === xor) {
                ans += dfs(i + 1, a[i], target2);
                ans %= mod;
            }
        } else {
            if (target2 === xor) {
                ans += dfs(i + 1, a[i], target1);
                ans %= mod;
            }
        }
        ans += dfs(i + 1, xor ^ a[i], t);
        ans %= mod;
        memo.set(key, ans);
        return ans;
    }

    return dfs(1, a[0], target1);
};

