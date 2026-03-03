// Problem: Count Distinct Numbers on Board
// LeetCode: https://leetcode.com/problems/count-distinct-numbers-on-board/
// Language: javascript
// Runtime: 86 ms
// Memory: 46.1 MB
// Submitted: 2023-01-29

/**
 * @param {number} n
 * @return {number}
 */
var distinctIntegers = function(N) {
    let arr = [N];
    for(let n of arr)
    for(let i=1;i<n;i++){
        if(n%i===1 && !arr.includes(i)){
            arr.push(i)
        }
    }
    console.log(arr, N)
    return arr.length;
    
};
