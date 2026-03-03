// Problem: Top K Frequent Words
// LeetCode: https://leetcode.com/problems/top-k-frequent-words/
// Language: javascript
// Runtime: 89 ms
// Memory: 47.9 MB
// Submitted: 2023-06-14

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {

    // let root = new Trie()
    let freq = {}
    for (let word of words) {
        freq[word] = freq[word] || 0
        freq[word]++
    }

    return Object.keys(freq).sort((a, b) => freq[b] - freq[a] || a.localeCompare(b)).slice(0, k)
};


// function TrieNode(children = undefined) {
//     return {
//         end: false,
//         children: children || {},
//         f: 0
//     };
// }

// var Trie = function () {
//     root = new TrieNode()
// };
// cl = console.log
// /** 
// * @param {string} word
// * @return {void}
// */
// Trie.prototype.insert = function (word) {
//     let r = root
//     for (let c of word) {
//         r.children[c] = r.children[c] ? r.children[c] : new TrieNode()
//         r = r.children[c]
//     }
//     r.end = word
// };

// /** 
// * @param {string} word
// * @return {boolean}
// */
// Trie.prototype.search = function (word) {
//     let r = root
//     for (let c of word) {
//         if (r.children[c]) {
//             r = r.children[c]
//         } else {
//             return false
//         }
//     }

//     return !!r.end
// };

// /** 
// * @param {string} prefix
// * @return {boolean}
// */
// Trie.prototype.startsWith = function (prefix) {
//     let r = root
//     for (let c of prefix) {
//         if (r.children[c]) {
//             r = r.children[c]
//         } else {
//             return false
//         }
//     }

//     return true
// };

// /** 
// * @param {string} prefix
// * @return {boolean}
// */
// Trie.prototype.guessThree = function (word) {
//     let r = root
//     let arr = []
//     let s = ""
//     for (let c of word) {
//         if (r.children[c]) {
//             s += c
//             r = r.children[c]
//         } else {
//             return []
//         }
//     }

//     function dfs(node) {
//         if (!node) return
//         if (arr.length === 3) return
//         if (node.end) {
//             arr.push(node.end)
//         }
//         let keys = Object.keys(node.children).sort()

//         for (let c of keys) {
//             dfs(node.children[c])
//         }
//     }

//     dfs(r)

//     return arr
// };

// /** 
// * Your Trie object will be instantiated and called as such:
// * var obj = new Trie()
// * obj.insert(word)
// * var param_2 = obj.search(word)
// * var param_3 = obj.startsWith(prefix)
// */
