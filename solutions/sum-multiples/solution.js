// Problem: Sum Multiples
// LeetCode: https://leetcode.com/problems/sum-multiples/
// Language: javascript
// Runtime: 94 ms
// Memory: 44.2 MB
// Submitted: 2023-04-23

/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
    let arr = [3,5,7];
    let sum = 0;
    let ans = []
    for(let i=1;i<=n;i++){
        for(let num of arr){
            if(i%num===0){
                sum+=i;
                // ans.push(i)
                break;
            }
        }
    }
    // console.log(ans)
    return sum;
};
