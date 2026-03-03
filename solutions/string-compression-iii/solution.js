// Problem: String Compression III
// LeetCode: https://leetcode.com/problems/string-compression-iii/
// Language: javascript
// Runtime: 103 ms
// Memory: 63.8 MB
// Submitted: 2024-05-26

/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function(word) {
    
    let curr = word[0]
    let currCount = 1
    let an = ''
    for(let i=1;i<word.length;i++) {
        if(curr === word[i]) {
            currCount++
            
            if(currCount === 9) {
                an+=(currCount + curr)
                currCount=0
            }
        } else {
            if(currCount !==0)
             an+=(currCount + curr)
            currCount = 1
            curr = word[i]
        }
    }
         if(currCount !==0)
      an+=(currCount + curr)
    return an
};
