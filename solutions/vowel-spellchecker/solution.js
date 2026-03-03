// Problem: Vowel Spellchecker
// LeetCode: https://leetcode.com/problems/vowel-spellchecker/
// Language: javascript
// Runtime: 29 ms
// Memory: 68 MB
// Submitted: 2025-11-27

/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
var spellchecker = function (wordlist, queries) {

    function mask(word) {
        let res = "";
        for (let c of word) {
            res += "aeiou".includes(c) ? "*" : c;
        }
        return res;
    }

    let exactSet = new Set(wordlist);

    let caseMap = new Map();

    let vowelMap = new Map();

    for (let word of wordlist) {
        let lower = word.toLowerCase();
        let masked = mask(lower);

        if (!(caseMap.has(lower))) caseMap.set(lower, word)
        if (!(vowelMap.has(masked))) vowelMap.set(masked, word)
    }

    return queries.map(q => {
        if (exactSet.has(q)) return q;

        let lower = q.toLowerCase();

        if (caseMap.has(lower)) return caseMap.get(lower);

        let masked = mask(lower);
        if (vowelMap.has(masked)) return vowelMap.get(masked);

        return "";
    });
};

