// Problem: Reverse Words With Same Vowel Count
// LeetCode: https://leetcode.com/problems/reverse-words-with-same-vowel-count/
// Language: javascript
// Runtime: 109 ms
// Memory: 71.8 MB
// Submitted: 2025-12-14

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let a = s.split(" ");
    let vo = "aeiou";
    function getVC(s) {
        let vc = 0;

        for (let c of s) {
            if (vo.includes(c)) vc++;
        }

        return vc;
    }

    let voc = getVC(a[0]);

    for (let i = 1; i < a.length; i++) {
        if (getVC(a[i]) === voc) {
            a[i] = a[i].split('').reverse().join('')
        }
    }

    return a.join(' ')
};

