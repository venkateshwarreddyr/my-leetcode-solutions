// Problem: Shortest Completing Word
// LeetCode: https://leetcode.com/problems/shortest-completing-word/
// Language: javascript
// Runtime: 98 ms
// Memory: 49.4 MB
// Submitted: 2023-05-29

cl = console.log
var shortestCompletingWord = function (s, words) {

    let a = s.replace(/[^a-zA-Z]/g, '').toLowerCase()
    let n = a.length;
    let obj = {};
    for (let i = 0; i < n; i++) {
        obj[a[i]] = obj[a[i]] || 0;
        obj[a[i]]++;
    }
    let an = []
    for (let word of words) {
        let o = { ...obj }
        for (let c of word) {
            if (o[c]) {
                o[c]--
            }
            if (o[c] === 0) {
                delete o[c]
            }
        }

        if (Object.keys(o).length === 0) an.push(word)
    }

    return an.sort((a, b) => a.length - b.length)[0]
};
