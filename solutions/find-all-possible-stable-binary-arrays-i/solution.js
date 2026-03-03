// Problem: Find All Possible Stable Binary Arrays I
// LeetCode: https://leetcode.com/problems/find-all-possible-stable-binary-arrays-i/
// Language: javascript
// Runtime: 565 ms
// Memory: 73.5 MB
// Submitted: 2024-04-27

/**
 * @param {number} zero
 * @param {number} one
 * @param {number} limit
 * @return {number}
 */
var numberOfStableArrays = function(zero, one, limit) {
    let MOD = 10**9+7
    
    let memo = {}
    limit++
    function fn(zero, one, curr) {
    let n = zero + one
        
        let key = `${zero}, ${one}, ${curr}`
        if(memo[key] !== undefined) return memo[key]
        
        if(zero === 0 || one === 0) {
            if(n >= limit)  memo[key] = 0
            else if (zero === 0 && curr === 0)  memo[key] = 0
            else if (one === 0 && curr === 1)  memo[key] = 0
            else memo[key] = 1
            
            return memo[key]
        }
        
        
        let an = 0
        let onee = 0
        let zeroe = 0
        if(curr === 0) {
            zeroe=fn(zero-1, one, 0)
            onee=fn(zero-1, one, 1)
            if(zero >= limit) {
                zeroe-=(fn(zero - limit, one, 1))
            }
        } else {
            zeroe=fn(zero, one-1, 0)
            onee=fn(zero, one-1, 1)
            if(one >= limit) {
                  onee-=(fn(zero, one-limit, 0))
            }
        }
        
        return memo[key] = ((onee % MOD)  +  (zeroe % MOD) + MOD) % MOD
        
    }
    let ans = fn(zero, one, 1) + fn(zero, one, 0)
    return (ans) % MOD
};
