// Problem: Fizz Buzz
// LeetCode: https://leetcode.com/problems/fizz-buzz/
// Language: javascript
// Runtime: 76 ms
// Memory: 44.2 MB
// Submitted: 2022-03-19

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let arr = []
    for(let i=1;i<=n;i++){
        if(i%15===0) arr.push('FizzBuzz')
        else if(i%3===0) arr.push('Fizz')
        else if(i%5===0) arr.push('Buzz')
        else arr.push(i.toString())
    }
    return arr;
};
