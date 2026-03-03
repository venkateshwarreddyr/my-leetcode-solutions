// Problem: Number of Flowers in Full Bloom
// LeetCode: https://leetcode.com/problems/number-of-flowers-in-full-bloom/
// Language: javascript
// Runtime: 92 ms
// Memory: 86 MB
// Submitted: 2026-01-18

var fullBloomFlowers = function (flowers, persons) {
    const starts = flowers.map(([s]) => s).sort((a, b) => a - b);
    const ends = flowers.map(([, e]) => e).sort((a, b) => a - b);
 
    const countLE = (arr, x) => {
        let l = 0,
            r = arr.length;
        while (l < r) {
            const m = (l + r) >> 1;
            if (arr[m] <= x) l = m + 1;
            else r = m;
        }
        return l;
    };
 
    const ans = [];
    for (const t of persons) {
        const started = countLE(starts, t);
        const ended = countLE(ends, t - 1);
        ans.push(started - ended);
    }
    return ans;
};
