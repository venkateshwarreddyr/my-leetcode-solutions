// Problem: Distinct Prime Factors of Product of Array
// LeetCode: https://leetcode.com/problems/distinct-prime-factors-of-product-of-array/
// Language: javascript
// Runtime: 222 ms
// Memory: 48.5 MB
// Submitted: 2023-06-07

/**
 * @param {number[]} nums
 * @return {number}
 */

const getPrimeFactors = function(n){
  const factors = [];
  
    for(let i=2;i<=n;i++){
        while(n%i===0){
            factors.push(i);
            n=n/i;
        }
    }
    
  return factors;
}

var distinctPrimeFactors = function(nums) {
    let set = new Set();
    
    for(let num of nums){
        let pf = getPrimeFactors(num);

        pf.forEach(e => set.add(e));
    }

    return set.size;
};
