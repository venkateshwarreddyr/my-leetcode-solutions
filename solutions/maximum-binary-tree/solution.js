// Problem: Maximum Binary Tree
// LeetCode: https://leetcode.com/problems/maximum-binary-tree/
// Language: javascript
// Runtime: 108 ms
// Memory: 49.5 MB
// Submitted: 2023-06-03

cl = console.log;
var constructMaximumBinaryTree = function (nums) {
    let n = nums.length
    if (!n) return null;
    let max = Math.max(...nums)
    let maxi = nums.indexOf(max)

    let root = new TreeNode(max)
    root.left = constructMaximumBinaryTree(nums.slice(0, maxi))
    root.right = constructMaximumBinaryTree(nums.slice(maxi + 1))

    return root
};

