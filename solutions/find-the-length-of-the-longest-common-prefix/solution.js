// Problem: Find the Length of the Longest Common Prefix
// LeetCode: https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix/
// Language: javascript
// Runtime: 322 ms
// Memory: 72.7 MB
// Submitted: 2024-02-18

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function(arr1, arr2) {
    let set = new Set();
     for(let num of arr1) {
          let s = num.toString();
         for(let i=0;i < s.length;i++) {
            // if(set.has(s.slice(0, i+1))) {
            set.add(Math.floor(num / (Math.pow(10, s.length - 1 - i))))
        }
     }
    // console.log(set)
     let max = 0
     for(let num of arr2) {
        let s = num.toString();
        for(let i=max;i < s.length;i++) {
            // if(set.has(s.slice(0, i+1))) {
            if(set.has(Math.floor(num / (Math.pow(10, s.length - 1 - i))))) {
                max = i + 1
            }
        }
    }

    return max
}
// var longestCommonPrefix11 = function(arr1, arr2) {
//     let set = new Set(arr1);
    
//     let max = 0

//     for(let num of arr2) {
//         let s = num.toString();
//         for(let i=max;i < s.length;i++) {
//             // if(set.has(s.slice(0, i+1))) {
//             if(set.has(Math.floor(num / (Math.pow(10, s.length - 1 - i))))) {
//                 max = i + 1
//             }
//         }
//     }

//     return max

// };
