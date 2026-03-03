// Problem: Leaf-Similar Trees
// LeetCode: https://leetcode.com/problems/leaf-similar-trees/
// Language: javascript
// Runtime: 67 ms
// Memory: 44.4 MB
// Submitted: 2024-01-09

cl = console.log
var leafSimilar = function (root1, root2) {
    let an1 = ''
    let an2 = ''

    const dfs = (r, an = []) => {
        if (!r) return an
        if (!r.left && !r.right) {
            an.push(r.val)
        }
        dfs(r.left, an)
        dfs(r.right, an)
        return an.join(',')
    }
    // dfs(root1)
    return dfs(root1) === dfs(root2);


};
