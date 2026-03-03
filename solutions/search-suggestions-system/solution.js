// Problem: Search Suggestions System
// LeetCode: https://leetcode.com/problems/search-suggestions-system/
// Language: javascript
// Runtime: 257 ms
// Memory: 65.5 MB
// Submitted: 2023-06-14

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
    let r = new Trie()

    for (let product of products) {
        r.insert(product)
    }
    let an = []
    let s = ""
    for (let c of searchWord) {
        s += c
        an.push(r.guessThree(s))
    }

    return an
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
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.guessThree = function (word) {
    let r = root
    let arr = []
    let s = ""
    for (let c of word) {
        if (r.children[c]) {
            s += c
            r = r.children[c]
        } else {
            return []
        }
    }

    function dfs(node) {
        if (!node) return
        if (arr.length === 3) return
        if (node.end) {
            arr.push(node.end)
        }
        let keys = Object.keys(node.children).sort()

        for (let c of keys) {
            dfs(node.children[c])
        }
    }

    dfs(r)

    return arr
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
