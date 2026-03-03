// Problem: Double Modular Exponentiation
// LeetCode: https://leetcode.com/problems/double-modular-exponentiation/
// Language: javascript
// Runtime: 72 ms
// Memory: 44.9 MB
// Submitted: 2023-12-10

cl = console.log
/**
 * @param {number[][]} variables
 * @param {number} target
 * @return {number[]}
 */
var getGoodIndices = function(arr, target) {
    let n = arr.length
    let an = []
    let i=0
    
function modExp(x, p, m) {
  let ans = 1;

  x %= m;

  while (p > 0) {
    if (p % 2 === 1) {
      ans = (ans * x) % m;
      p--;
    }

    x = (x * x) % m;
    p = p >> 1; 
  }

  return ans;
}


    
    for(let [a, b, c, m] of arr) {
        
        let ans = modExp(a, b, 10)
        ans = modExp(ans, c, m)
        if(ans === target) {
            an.push(i)
        }
        i++
    }
    
    return an
};
