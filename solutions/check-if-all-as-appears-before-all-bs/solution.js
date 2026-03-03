// Problem: Check if All A's Appears Before All B's
// LeetCode: https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/
// Language: javascript
// Runtime: 111 ms
// Memory: 39.5 MB
// Submitted: 2022-01-02

/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
    s = s.split('');
    for(let i=0; i<s.length;i++){
        if(s[i] === 'a'){
            while(s[i]==='a') i++
            while(s[i]==='b') i++
            return i === s.length
        }else{
             while(s[i]==='b') i++
            return i === s.length
        }
    }
};
