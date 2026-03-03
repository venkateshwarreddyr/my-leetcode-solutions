// Problem: Implement Magic Dictionary
// LeetCode: https://leetcode.com/problems/implement-magic-dictionary/
// Language: javascript
// Runtime: 95 ms
// Memory: 47.4 MB
// Submitted: 2023-06-14

var MagicDictionary = function () {
    a = []
};

/** 
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function (dictionary) {
    a = dictionary
};

/** 
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function (searchWord) {
    for (let word of a) {
        if (word.length === searchWord.length) {
            let c = 0
            for (let i = 0; i < word.length; i++) {
                if (word[i] !== searchWord[i]) {
                    c++
                }
            }
            if (c === 1) return true
        }

    }

    return false
};

/** 
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */
