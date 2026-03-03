// Problem: Count Vowel Substrings of a String
// LeetCode: https://leetcode.com/problems/count-vowel-substrings-of-a-string/
// Language: javascript
// Runtime: 70 ms
// Memory: 44.6 MB
// Submitted: 2023-05-25

cl = console.log
var countVowelSubstrings = function (word) {
    let n = word.length
    let j = 0;
    let i = 0;
    let v = "aeiou"
    let set = new Set()
    let an = 0;
    while (i < n) {
        if (v.includes(word[j])) {
            set.add(word[j])
            j++;
            if (set.size === 5) an++
        } else {
            i++;
            j = i;
            set = new Set()
        }
    }

    return an;
};

