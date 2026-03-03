// Problem: Longest Common Prefix
// LeetCode: https://leetcode.com/problems/longest-common-prefix/
// Language: javascript
// Runtime: 2 ms
// Memory: 55.6 MB
// Submitted: 2025-07-20

class TrieNode {
    constructor() {
        this.children = {}
        this.endNode = false
        this.prefixCount = 0
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode()
    }

    insert(word) {
        let curr = this.root

        for (let ch of word) {
            if (!curr.children[ch]) {
                curr.children[ch] = new TrieNode()
            }

            curr = curr.children[ch]
            curr.prefixCount++
        }

        curr.endNode = true
    }

    longestCommonPrefix(n) {
        let word = ''
        let curr = this.root
        while (Object.keys(curr.children).length === 1) {
            let ch = Object.keys(curr.children)[0]

            if (curr.children[ch].prefixCount !== n) break;
            word += ch
            curr = curr.children[ch]
        }

        return word
    }
}

var longestCommonPrefix = function (words) {
    let t = new Trie()
    let n = words.length

    for (let word of words) {
        t.insert(word)
    }

    return t.longestCommonPrefix(n)
};
