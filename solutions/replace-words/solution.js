// Problem: Replace Words
// LeetCode: https://leetcode.com/problems/replace-words/
// Language: javascript
// Runtime: 117 ms
// Memory: 68 MB
// Submitted: 2024-06-07

/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
    let r = new Trie()
    for (let word of dictionary) {
        r.insert(word)
    }

    return sentence.split(' ').map(e => r.search(e)).join(" ")
};


function TrieNode(children = undefined) {
    return {
        end: "",
        children: children || {},
    };
}

var Trie = function () {
    root = new TrieNode()
};
cl = console.log
/** 
* @param {string} word
* @return {void}
*/
Trie.prototype.insert = function (word) {
    let r = root
    for (let c of word) {
        r.children[c] = r.children[c] ? r.children[c] : new TrieNode()
        r = r.children[c]
    }
    r.end = word
};

/** 
* @param {string} word
* @return {boolean}
*/
Trie.prototype.search = function (word) {
    let r = root
    for (let c of word) {
        if (r.children[c]) {
            r = r.children[c]
            if (r.end)
                return r.end
        } else {
            return r.end || word
        }
    }

    return r.end || word
};
