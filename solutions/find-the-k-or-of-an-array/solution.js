// Problem: Find the K-or of an Array
// LeetCode: https://leetcode.com/problems/find-the-k-or-of-an-array/
// Language: javascript
// Runtime: 85 ms
// Memory: 44.2 MB
// Submitted: 2023-10-30

cl = console.log
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKOr = function(a, k) {
    let an = 0
    for(let i=0;i<32;i++){
        let cc = 0
        for(let e of a){
            if(e & 2**i){
                cc++
            }
        }
        if(cc>=k) an+= 2 ** i
    }
    return an
};
