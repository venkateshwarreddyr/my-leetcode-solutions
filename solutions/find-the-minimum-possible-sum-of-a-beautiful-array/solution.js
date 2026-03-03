// Problem: Find the Minimum Possible Sum of a Beautiful Array
// LeetCode: https://leetcode.com/problems/find-the-minimum-possible-sum-of-a-beautiful-array/
// Language: javascript
// Runtime: 205 ms
// Memory: 71.2 MB
// Submitted: 2023-08-27

/**
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var minimumPossibleSum = function(n, target) {
    let ob = {}
    
    let i=0
    let an = 0 
    while(n) {
        i++
        
       if(ob[i]) continue
        ob[target-i] = 1
        an+=i
        n--
    }   
    
    return an
};
