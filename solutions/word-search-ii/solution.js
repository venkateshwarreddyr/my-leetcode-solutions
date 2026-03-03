// Problem: Word Search II
// LeetCode: https://leetcode.com/problems/word-search-ii/
// Language: javascript
// Runtime: 2240 ms
// Memory: 50.2 MB
// Submitted: 2023-08-25

cl = console.log
function TrieNode(value = undefined, children = undefined) {
    return {
        value: value,
        children: children || {},
    };
}

function insert(r, key, value = key) {
    for (let char of key) {
        r.children[char] = r.children[char] || new TrieNode();
        r = r.children[char];
    }
    r.value = key;
}

var findWords = function (grid, words) {
    let root = new TrieNode()
    for (let w of words) {
        insert(root, w)
    }

    let m = grid.length;
    let n = grid[0].length;
    let vis = Array.from({ length: m }, () => new Array(n).fill(0))
    let an = new Set()

    const dfs = (i, j, root) => {
        if (root.value) {
            an.add(root.value)
            root.value = undefined
        }
        if (i < 0 || j < 0 || i >= m || j >= n || vis[i][j]) return false;
        vis[i][j] = 1
        for (let ch in root.children) {
            if (ch === grid[i][j]) {
                dfs(i - 1, j, root.children[ch]);
                dfs(i + 1, j, root.children[ch]);
                dfs(i, j - 1, root.children[ch]);
                dfs(i, j + 1, root.children[ch]);
            }
        }
        vis[i][j] = 0
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            dfs(i, j, root)
        }
    }

    return [...an];
};
