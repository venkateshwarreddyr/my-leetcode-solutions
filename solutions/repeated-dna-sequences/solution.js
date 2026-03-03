// Problem: Repeated DNA Sequences
// LeetCode: https://leetcode.com/problems/repeated-dna-sequences/
// Language: javascript
// Runtime: 17 ms
// Memory: 62.8 MB
// Submitted: 2025-12-30

var findRepeatedDnaSequences = function (s) {
    let n = s.length;

    let vis = new Set();
    let dups = new Set();

    for (let i = 0; i + 10 <= n; i++) {
        let ss = s.slice(i, i + 10);
        if (vis.has(ss)) {
            // 2nd time
            dups.add(ss);
        } else {
            // 1st time
            vis.add(ss);
        }
    }

    return [...dups];
};

var findRepeatedDnaSequences22222222 = function (s) {
    const k = 10;
    let l = 0,
        seen = new Set(),
        result = new Set();

    for (let r = 0; r < s.length; r++) {
        if (r - l + 1 > k) l++; // Maintain window size

        if (r - l + 1 === k) {
            let sub = s.slice(l, r + 1);
            if (seen.has(sub)) result.add(sub);
            else seen.add(sub);
        }
    }
    return [...result];
};

