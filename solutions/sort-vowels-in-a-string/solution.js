// Problem: Sort Vowels in a String
// LeetCode: https://leetcode.com/problems/sort-vowels-in-a-string/
// Language: javascript
// Runtime: 169 ms
// Memory: 62.8 MB
// Submitted: 2023-11-13

/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    let vls = "aeiouAEIOU"
    
    let a = s.split("")
    let newA = []
    
    for(let i=0;i<a.length;i++){
        if(vls.includes(a[i])){
            newA.push(a[i].charCodeAt(0))
            a[i] = null
        }
    }
    
    newA.sort((a,b) => a-b)
    let j = 0
     for(let i=0;i<a.length;i++){
         if(a[i] === null){
             a[i] = String.fromCharCode(newA[j++])
         }
         
     }
    
    return a.join("")
    
    
};
