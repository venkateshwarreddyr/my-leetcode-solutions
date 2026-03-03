// Problem: Longest Palindrome by Concatenating Two Letter Words
// LeetCode: https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/
// Language: javascript
// Runtime: 671 ms
// Memory: 65.6 MB
// Submitted: 2022-01-11


var longestPalindrome = function(words) {
    obj = {}
    counter = 0
    for(let word of words){
        let revword = word.split('').reverse().join('')
        if(obj[revword]){
            counter+=2
            obj[revword]--
        }else {
            obj[word] = (obj[word] || 0) + 1
        } 
    }
    for(let [key, value] of Object.entries(obj)){
        if(key[0] === key[1] && value) {
            counter+=1
            delete obj[key]
            break;
        }  
        
    }    

    return counter*2
};
