// Problem: Minimum Time to Type Word Using Special Typewriter
// LeetCode: https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/
// Language: javascript
// Runtime: 196 ms
// Memory: 46.8 MB
// Submitted: 2021-08-21

/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function(word) {
    words = word.split('');
    init = 0;
    pointer = 0
    for(let i=0; i<words.length; i++){
        let x = words[i].charCodeAt(0) - 97;
        
        let y = Math.min(Math.abs(x-pointer), Math.abs(26+(x>pointer?pointer:x)-(x<pointer?pointer:x)));
        console.log({y})
        init++;
        pointer = x;
        init+=y;
        console.log({init})
    }
        console.log()
    return init;
};
