// Problem: Find the Number of Good Pairs I
// LeetCode: https://leetcode.com/problems/find-the-number-of-good-pairs-i/
// Language: javascript
// Runtime: 105 ms
// Memory: 55 MB
// Submitted: 2024-05-26

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function(nums1, nums2, k) {
    function getFactors(num) {
    // Check if the number is less than 1
    if (num < 1) {
        return "Input must be a positive integer.";
    }

    let factors = [];

    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            factors.push(i);

            if (i !== num / i) {
                factors.push(num / i);
            }
        }
    }

    factors.sort((a, b) => a - b);

    return factors;
}
    
    let facObj = {}
    
    for(let e of nums1) {
        if(e%k === 0) {
            let factors = getFactors(e/k)
            
            for(let f of factors) {
                facObj[f] = facObj[f] || 0
                facObj[f]++
            }
        }
    }
    console.log(facObj)
    let an = 0
    for(let e of nums2) {
        an+=(facObj[e] ?? 0)
    }
    
    return an

};
