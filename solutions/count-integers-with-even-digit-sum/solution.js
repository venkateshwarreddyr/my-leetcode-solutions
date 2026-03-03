// Problem: Count Integers With Even Digit Sum
// LeetCode: https://leetcode.com/problems/count-integers-with-even-digit-sum/
// Language: javascript
// Runtime: 93 ms
// Memory: 42.8 MB
// Submitted: 2022-02-20

/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    let counter = 0
    for(let i=1;i<=num;i++){
        let sum = 0
        let n = i
        while(n!=0){
            let x = n%10
            sum+=x
            n = Math.floor(n/10)
        }
        if(sum%2===0) counter++
    }
    return counter;
};
