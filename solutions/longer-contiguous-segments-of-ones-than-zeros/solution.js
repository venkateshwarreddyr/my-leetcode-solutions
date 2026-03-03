// Problem: Longer Contiguous Segments of Ones than Zeros
// LeetCode: https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/
// Language: javascript
// Runtime: 88 ms
// Memory: 39.1 MB
// Submitted: 2021-05-23

/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function(s) {
    let ones = 0;
    let zeros = 0;
    let hitzeros = 0;
    let hitones = 0;
    for(let i = 0; i< s.length; i++){
        if(s[i] == 1){
            ones++;
            zeros=0
        }
        else if(s[i] == 0){
            zeros++;
            ones = 0
        }
        if(ones>hitones) hitones = ones;
        else if(zeros>hitzeros) hitzeros = zeros;
    }
    return hitones>hitzeros?true:false
};
