// Problem: Dot Product of Two Sparse Vectors
// LeetCode: https://leetcode.com/problems/dot-product-of-two-sparse-vectors/
// Language: javascript
// Runtime: 81 ms
// Memory: 61 MB
// Submitted: 2024-04-27

/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
var SparseVector = function(nums) {
    this.nums_vec = nums
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function(vec) {
    let an = 0
    for(let i=0;i<this.nums_vec.length;i++) {
        an+=(vec.nums_vec[i] * this.nums_vec[i])
    }

    return an
};

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);
