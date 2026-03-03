// Problem: Count Pairs Of Similar Strings
// LeetCode: https://leetcode.com/problems/count-pairs-of-similar-strings/
// Language: javascript
// Runtime: 896 ms
// Memory: 44.6 MB
// Submitted: 2022-12-19

/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function(words) {
    let pair = 0;
    
    const incl = (word1, word2) => {
        for(let chr of word1){
            if(!word2.includes(chr)){
                return false
            }
        }
        
        for(let chr of word2){
            if(!word1.includes(chr)){
                return false
            }
        }
        
        return true;
    }
    
    for(let i=0; i<words.length; i++){
        let main_str = words[i];
        for(let j=i+1;j<words.length;j++){
            let str1 = words[j];
            if(incl(main_str, str1)) {
                pair++;
            }
        }
    }
    
    return pair;
};
