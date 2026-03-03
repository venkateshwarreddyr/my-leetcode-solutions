// Problem: Prime Number of Set Bits in Binary Representation
// LeetCode: https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/
// Language: javascript
// Runtime: 88 ms
// Memory: 39.1 MB
// Submitted: 2021-05-31

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
    let primeNums = new Set([2,3,5,7,11,13,17,19,23])
    let isPrime = function(i){
        if(primeNums[i]!== undefined) return primeNums[i]
            let counter = 0
            for(let j = 1; j<=i; j++){
                if(i%j === 0) counter++;
            }
            if(counter <= 2){
                primeNums[i] = true;
                return true
            }else{
                primeNums[i] = false;
                return false
            }
    }
    let counter = 0;
    let countBits = (n) => {
        let count = 0;
        while(n!=0){
            count += n&1
            n = n>>1
        }
        return count
    }
    for(let i = left;i<=right;i++){
        let x = countBits(i);
        if(primeNums.has(x)) counter++;   
    }
    
    return counter;
};
