// Problem: Count Sorted Vowel Strings
// LeetCode: https://leetcode.com/problems/count-sorted-vowel-strings/
// Language: javascript
// Runtime: 84 ms
// Memory: 38.3 MB
// Submitted: 2021-05-18

/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
   const obj= {
       1:5,
       2:15,
   }
   let arr = [5,4,3,2,1]
   function aaa(n1){
       
       if(obj[n1])
        return obj[n1];
        aaa(n1-1)
       let result = obj[n1-1];
       let res = result;
       let res2 = res
       for(i=0;i<5;i++){
           res2 -= arr[i]
           res+=res2
       }
       
       for(i=3;i!=-1;i--){
           arr[i]+=arr[i+1]
       }
       obj[n1] = res
       return res
   }
return aaa(n)
};
