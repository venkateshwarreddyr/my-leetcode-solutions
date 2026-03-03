// Problem: Remove Sub-Folders from the Filesystem
// LeetCode: https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/
// Language: javascript
// Runtime: 299 ms
// Memory: 70.6 MB
// Submitted: 2023-06-14

/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function (folder) {
    let r = new Trie()
    folder.sort()
    for (let f of folder) {
        r.insert(f + '/')
    }
    // cl(r.startsWith('/'))
    return folder.filter(f => r.search(f + '/'))
};

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
    // cl(r, word, "insert")
    for (let c of word) {
        if (r.end) return;
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
    // cl(r, word, "search")
    for (let c of word) {
        // cl(r, c)
        if (r.children[c]) {
            r = r.children[c]
        } else {
            return false
        }
    }

    return !!r.end
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
