// Problem: Distribute Candies Among Children I
// LeetCode: https://leetcode.com/problems/distribute-candies-among-children-i/
// Language: javascript
// Runtime: 119 ms
// Memory: 49.1 MB
// Submitted: 2023-11-11

/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function(n, limit) {
    let memo = {}
    function fn(i, l) {
        let x = i + "," + l
        if(memo[x] !== undefined) return memo[x]
        if( i === 3 && l === 0) return 1
         if( i === 3) return 0
        let sum = 0
        for(let e = 0; e<=l; e++) {
            if(e>limit) continue
           sum+= fn(i+1, l - e)
        }
       memo[x] = sum 
        return sum
    }
    
    return fn(0, n)
};
