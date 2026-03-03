// Problem: Goat Latin
// LeetCode: https://leetcode.com/problems/goat-latin/
// Language: javascript
// Runtime: 55 ms
// Memory: 41.9 MB
// Submitted: 2023-05-25

/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
    let an = []
    let v = 'aeiouAEIOU'
    let words = sentence.split(' ')

    let a = ''
    let ma = 'ma'
    for (let word of words) {
        let nw = ''
        a += 'a'

        if (v.includes(word[0])) {
            nw = word
        } else {
            nw = word.slice(1) + word[0]
        }
        nw = nw + ma + a
        an.push(nw)
    }

    return an.join(' ')
};
