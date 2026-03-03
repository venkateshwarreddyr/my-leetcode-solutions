// Problem: Implement Trie (Prefix Tree)
// LeetCode: https://leetcode.com/problems/implement-trie-prefix-tree/
// Language: javascript
// Runtime: 235 ms
// Memory: 65.6 MB
// Submitted: 2023-06-14

function TrieNode(children = undefined) {
    return {
        end: false,
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
    r.end = true
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
        } else {
            return false
        }
    }

    return r.end
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let r = root
    for (let c of prefix) {
        if (r.children[c]) {
            r = r.children[c]
        } else {
            return false
        }
    }

    return true
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
