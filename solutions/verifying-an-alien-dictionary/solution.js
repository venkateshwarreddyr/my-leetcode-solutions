// Problem: Verifying an Alien Dictionary
// LeetCode: https://leetcode.com/problems/verifying-an-alien-dictionary/
// Language: javascript
// Runtime: 67 ms
// Memory: 41.7 MB
// Submitted: 2023-05-31

cl = console.log
var isAlienSorted = function (words, order) {
    order = order.split('')


    const validate = (a, b) => {
        let n = Math.min(a.length, b.length)
        for (let i = 0; i < n; i++) {
            let acode = order.indexOf(a[i])
            let bcode = order.indexOf(b[i])
            if (acode === bcode) continue;
            return acode < bcode
        }
        return a.length <= b.length
    }
    for (let i = 1; i < words.length; i++) {
        if (!validate(words[i - 1], words[i])) return false
    }
    return true
};
