// Problem: Integer Replacement
// LeetCode: https://leetcode.com/problems/integer-replacement/
// Language: javascript
// Runtime: 72 ms
// Memory: 37.7 MB
// Submitted: 2021-06-05

/**
 * @param {number} n
 * @return {number}
 */


var integerReplacement = function(n) {
    let count = 0;
    while(n!=1){
        count++
        if(n===3) n--
        else if(n%2 === 0) n/=2
        else if((n&3) == 3) n++
        else n--
    }
    return count;
};
