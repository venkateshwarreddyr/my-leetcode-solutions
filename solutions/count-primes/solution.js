// Problem: Count Primes
// LeetCode: https://leetcode.com/problems/count-primes/
// Language: javascript
// Runtime: 244 ms
// Memory: 79.5 MB
// Submitted: 2021-08-05

/**
 * @param {number} n
 * @return {number}
 */
// let checkifPrime(num){
//     let count = 0;
//         for(let i = 1;i<num/2;i++){
//         if(num%i === 0){
//             count++;
//         }
//     }
//         if(count === 2){
//             return true;
//         }
// }
var countPrimes = function(n) {
    let N = new Array(n+1);
    let counter = 0;
    for(let i=2;i< n;i++){
        if(!N[i]){
            // console.log()
            counter++
            for(let j =i; j<n+1;j+=i){
                N[j] = true;
            }
        }
        
    }
    return counter;
};














var countPrimes1 = function(n) {
    if(n<=1) return 0;
    if(n==2) return 1;
    if(n==3) return 2;
    let counter = 1;
    for(let num=3; num<n;num+=2){
        let count = 0;
    for(let i = 2;i<num/2;i++){
        if(num%i === 0){
            count++;
        }
    }
        if(count === 0){
            counter++
        }
    }
    return counter;
};
