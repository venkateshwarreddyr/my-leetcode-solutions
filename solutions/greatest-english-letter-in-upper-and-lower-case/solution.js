// Problem: Greatest English Letter in Upper and Lower Case
// LeetCode: https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/
// Language: javascript
// Runtime: 66 ms
// Memory: 43.7 MB
// Submitted: 2023-05-24

/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function (s) {
    let an = ''
    let set = new Set();
    for (let c of s) {
        let l = c.toLowerCase();
        let u = c.toUpperCase();
        if(set.has(u)) continue;
        set.add(u)
        if (s.includes(l) && s.includes(u)) {
            if (!an) an = u
            else if (an && u > an)
                an = u
        }
    }

    return an;
};
