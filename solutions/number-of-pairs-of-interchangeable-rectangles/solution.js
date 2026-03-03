// Problem: Number of Pairs of Interchangeable Rectangles
// LeetCode: https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles/
// Language: javascript
// Runtime: 550 ms
// Memory: 110.5 MB
// Submitted: 2021-09-12

/**
 * @param {number[][]} rectangles
 * @return {number}
 */
 
var interchangeableRectangles = function(rec) {
    let obj = {};
    let sum = 0;
    // factorial = (n) => {
    //         if (n === 0) { 
    //             return 0; 
    //         }
    //     if (n === 1) { 
    //             return 1; 
    //         }
    //         else { 
    //             return n * factorial( n - 1 ); 
    //         }
    //     }
    for(let sz of rec){
        let a = sz[0]/sz[1];
        if(obj[a]) sum+=(obj[a])
        obj[a] = obj[a]?obj[a]+1:1
    }
    // console.log(obj)
    // return 
    // let sum =0;
    // for(let val of Object.values(obj)){
    //     sum+=(factorial(val-1))
    // };
    return sum;
};
