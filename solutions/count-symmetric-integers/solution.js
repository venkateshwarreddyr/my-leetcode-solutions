// Problem:   Count Symmetric Integers
// LeetCode: https://leetcode.com/problems/count-symmetric-integers/
// Language: javascript
// Runtime: 121 ms
// Memory: 45.8 MB
// Submitted: 2023-09-03

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
    let an = 0
    for(let i=low;i<=high;i++){
        let cc = 0
        let x = i.toString()
        if(x.length%2 === 1) continue
        for(let j=0,k=x.length-1;j<k;j++,k--){
            cc+=(+x[j])
            cc-=(+x[k])
        }
        if(cc) continue
        an++
    }
    
    return an
};
