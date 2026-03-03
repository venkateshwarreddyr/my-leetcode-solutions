// Problem: Sentence Similarity III
// LeetCode: https://leetcode.com/problems/sentence-similarity-iii/
// Language: javascript
// Runtime: 0 ms
// Memory: 53.9 MB
// Submitted: 2025-12-25

var areSentencesSimilar = function (s1, s2) {
    if (s1.length < s2.length) return areSentencesSimilar(s2, s1);

    // left match           ab  a
    // right match          ab  b
    // left & right match   abc ac

    let ws1 = s1.split(" ");
    let m = ws1.length, l1 = 0, r1 = m - 1;

    let ws2 = s2.split(" ");
    let n = ws2.length, l2 = 0, r2 = n - 1;

    for (; l1 <= r1 && l2 <= r2 && ws1[l1] === ws2[l2]; l1++, l2++) { } // left match
    for (; l1 <= r1 && l2 <= r2 && ws1[r1] === ws2[r2]; r1--, r2--) { } // right match
    return r2 < l2; // left & right match
};

