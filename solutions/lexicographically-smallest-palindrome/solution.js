// Problem: Lexicographically Smallest Palindrome
// LeetCode: https://leetcode.com/problems/lexicographically-smallest-palindrome/
// Language: javascript
// Runtime: 169 ms
// Memory: 52 MB
// Submitted: 2023-05-21

/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function(s) {
     s= s.split('')
       let n= s.length;
    let i=0,j=n-1;
    
    while(i<j){
        if(s[i] === s[j]){
            
        } else if(s[i]>s[j]){
            s[i]=s[j]
        } else {
            s[j]=s[i]
        }
        i++;
        j--;
    }
    
    return s.join("")
};
