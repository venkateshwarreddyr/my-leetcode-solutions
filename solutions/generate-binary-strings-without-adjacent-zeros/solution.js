// Problem: Generate Binary Strings Without Adjacent Zeros
// LeetCode: https://leetcode.com/problems/generate-binary-strings-without-adjacent-zeros/
// Language: javascript
// Runtime: 60 ms
// Memory: 54 MB
// Submitted: 2024-08-21

/**
 * @param {number} n
 * @return {string[]}
 */
var validStrings = function(n) {
    let an = []
    function fn(s) {
        if(s.length === n) {
            an.push(s)
            return
        }

        if(s[s.length-1] !== '0') {
            fn(s+0)
        }
        fn(s+1)
        
    }

    fn('')

    return an
};
