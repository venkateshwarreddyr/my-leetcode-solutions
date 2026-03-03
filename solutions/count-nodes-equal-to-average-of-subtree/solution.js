// Problem: Count Nodes Equal to Average of Subtree
// LeetCode: https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/
// Language: javascript
// Runtime: 72 ms
// Memory: 46.5 MB
// Submitted: 2023-06-03

var averageOfSubtree = function (root) {
    let c = 0
    function dfs(r) {
        if (!r) return [0, 0];
        let [left, leftCount] = dfs(r.left)
        let [right, rightCount] = dfs(r.right)
        let x = left + right + r.val;
        let count = 1 + leftCount + rightCount;
        
        if (Math.floor(x / count) === r.val) {
            c++
        }

        return [x, count]
    }

    dfs(root);


    return c
};
