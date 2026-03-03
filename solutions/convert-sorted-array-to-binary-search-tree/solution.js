// Problem: Convert Sorted Array to Binary Search Tree
// LeetCode: https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
// Language: javascript
// Runtime: 84 ms
// Memory: 41.3 MB
// Submitted: 2021-08-02


  // Definition for a binary tree node.
  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
  }

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if(nums.length === 0) return null
    
    let mid = Math.floor(nums.length/2);
    let root = new TreeNode(nums[mid]);
    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid+1));
    return root
};





var sortedArrayToBST1 = function(nums) {
   let roott = new TreeNode();
    
    var binarySearch = function(root, low, high) {
        if(low>high) return;
        
        let mid = Math.floor((low+high)/2);
        // console.log({low, mid, high}, root === null, root && root.val>nums[mid], root && root.val<=nums[mid])
        if(root === null){
            root = new TreeNode(nums[mid]);
            roott = root;
        binarySearch(root, mid+1, high);
        binarySearch(root, low, mid-1);
        }else if(root.val<nums[mid]){
            root.right = new TreeNode(nums[mid])
        binarySearch(root.right, mid+1, high);
        binarySearch(root.right, low, mid-1);
          }else if(root.val>=nums[mid]){
            root.left = new TreeNode(nums[mid])
        binarySearch(root.left, mid+1, high);
        binarySearch(root.left, low, mid-1);
        }
    }
    binarySearch(null, 0, nums.length)
    return roott
};
