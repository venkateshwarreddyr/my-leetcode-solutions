// Problem: Minimum Distance Between Three Equal Elements I
// LeetCode: https://leetcode.com/problems/minimum-distance-between-three-equal-elements-i/
// Language: javascript
// Runtime: 8 ms
// Memory: 55.4 MB
// Submitted: 2025-12-30

var minimumDistance = function (a) {
    let n = a.length
    let minD = Infinity

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                if (a[i] == a[j] && a[j] == a[k]
                ) {
                    let d = Math.abs(i - j) + Math.abs(j - k) + Math.abs(k - i)
                    minD = Math.min(minD, d)
                }
            }
        }
    }

    return minD === Infinity ? -1 : minD
};

