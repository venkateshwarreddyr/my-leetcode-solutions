// Problem: Generate Tag for Video Caption
// LeetCode: https://leetcode.com/problems/generate-tag-for-video-caption/
// Language: javascript
// Runtime: 2 ms
// Memory: 56.3 MB
// Submitted: 2025-10-12

/**
 * @param {string} caption
 * @return {string}
 */
var generateTag = function (s) {
    return (
        '#' + // 1st char
        s
            .split(/\s+/)
            .filter(x => x)
            .map((w, i) => {
                return (
                    (i === 0 //
                        ? w[0].toLowerCase()
                        : w[0].toUpperCase()) + //
                    w.slice(1).toLowerCase()
                );
            })
            .join('')
            .slice(0, 99) // remaining 99 chars
    );
};
