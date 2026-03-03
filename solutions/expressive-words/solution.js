// Problem: Expressive Words
// LeetCode: https://leetcode.com/problems/expressive-words/
// Language: javascript
// Runtime: 65 ms
// Memory: 45.3 MB
// Submitted: 2023-11-07

cl = console.log

function getSeqCountOfSameChar(s) {
    let i = 0;
    while (s[i] === s[i + 1]) i++;
    return i;
}

var expressiveWords = function (s, words) {
    let cc = 0

    OUTER:
    for (let w of words) {
        if (w.length > s.length) continue OUTER
        for (let i = 0, j = 0; i < s.length || j < w.length;) {
            if (s[i] !== w[j]) continue OUTER

            let ssamecharcount = getSeqCountOfSameChar(s.slice(i)) + 1
            let wsamecharcount = getSeqCountOfSameChar(w.slice(j)) + 1

            i += ssamecharcount
            j += wsamecharcount

            if (wsamecharcount > ssamecharcount) continue OUTER
            if (ssamecharcount === 2 && wsamecharcount === 1) continue OUTER
        }
        cc++
    }

    return cc

};
