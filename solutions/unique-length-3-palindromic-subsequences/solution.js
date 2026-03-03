// Problem: Unique Length-3 Palindromic Subsequences
// LeetCode: https://leetcode.com/problems/unique-length-3-palindromic-subsequences/
// Language: javascript
// Runtime: 260 ms
// Memory: 64.8 MB
// Submitted: 2025-11-21

/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence1 = function(s) {
    let arr = new Set();
    let A = []
    for(let i = 0; i<s.length;i++){
        if(!A.includes(s[i])){
        A.push(s[i])
        for(let j=i+2;j<s.length;j++){
            if(s[i]===s[j]){
                for(let k=i+1;k<j;k++){
                    arr.add(`${s[i]}${s[k]}${s[j]}`)
                }
            }
        }
        }
    }
    
    return arr.size
    
};
var countPalindromicSubsequence = function(s) {
    let arr = new Set(); let A = [];
    let counter = 0;
    let x;
    for(let i = 0; i<s.length;i++){
    if(!A.includes(s[i])){
        A.push(s[i])
        for(let j=s.length-1;j>i;j--){
            if(s[i]===s[j]){
                x = new Set(s.substring(i+1, j).split(''))
                // console.log(x);
                counter+=x.size;
                break;
            }
        }
    }
    }
    
    return counter
    
};
// var countPalindromicSubsequence = function(s) {
//     let counter = 0;
//     for(let i = 0; i<s.length;i++){
//         let count=0;
//         for(let j=i+2;j<s.length;j++){
//             if(s[i]!==s[j]){
//                 count++;
//             }else{
//                 count++;
//                 counter+=count;
//                 count = 0;
//             }
//         }
//     }
    
//     return counter
    
// };
