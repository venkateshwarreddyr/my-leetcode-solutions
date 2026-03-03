// Problem: Find Maximum Number of Non Intersecting Substrings
// LeetCode: https://leetcode.com/problems/find-maximum-number-of-non-intersecting-substrings/
// Language: javascript
// Runtime: 692 ms
// Memory: 103.3 MB
// Submitted: 2026-01-05

var maxSubstrings = function (word) {
    const nextChar = (ch) => String.fromCharCode(ch.charCodeAt(0) + 1);
    const n = word.length;
    const indicesMap = {};

    for (let i = 0; i < n; i++) {
        indicesMap[word[i]] = indicesMap[word[i]] || [];
        indicesMap[word[i]].push(i);
    }

    // 2. for each char, for each R, take nearest L that makes s[L,R] valid
    const candidates = [];
    for (let ch = 'a'; ch <= 'z'; ch = nextChar(ch)) {
        const indices = indicesMap[ch] || []; // same Char Indices

        let L = 0;
        for (let R = 0; R < indices.length; R++) {
            // skip farthest Ls for this R
            while (L + 1 < R && indices[R] - indices[L + 1] + 1 >= 4) {
                L++;
            }

            // pick closest L for this R
            if (indices[R] - indices[L] + 1 >= 4) {
                candidates.push([indices[L], indices[R]]);
            }
        }
    }

    candidates.sort((a, b) => a[1] - b[1]); // Sort by R, end of substrings

    // 3. Greedy Interval Scheduling
    let count = 0;
    let prevEnd = -1;
    for (const [start, end] of candidates) {
        if (prevEnd < start) {
            count++;
            prevEnd = end;
        }
    }

    return count;
};

