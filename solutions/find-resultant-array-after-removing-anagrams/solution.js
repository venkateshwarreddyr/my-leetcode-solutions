// Problem: Find Resultant Array After Removing Anagrams
// LeetCode: https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/
// Language: javascript
// Runtime: 75 ms
// Memory: 48.5 MB
// Submitted: 2023-05-24

/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function (words) {
    let n = words.length;
    let an = []

    for (let i = 1; i < n; i++) {
        if (words[i].length !== words[i - 1].length) {
            continue;
        } else if (words[i].split('').sort().join('') !== words[i - 1].split('').sort().join('')) {
            continue;
        }
        an.push(i)
    }

    return words.filter((_, i) => !an.includes(i))

};
