// Problem: XOR Queries of a Subarray
// LeetCode: https://leetcode.com/problems/xor-queries-of-a-subarray/
// Language: javascript
// Runtime: 124 ms
// Memory: 52.6 MB
// Submitted: 2021-06-05

/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
    // let newArr = [];
    // for(let query of queries){
    //     let x = 0;
    //     for(let i = query[0]; i<=query[1]; i++){
    //         x = x^arr[i]
    //     }
    //     newArr.push(x)
    // }
    // return newArr;
    let newArr = [0];
    for(let i = 0; i<arr.length; i++){
        newArr.push(arr[i]^newArr[i])
    }
    // console.log(newArr)

    return queries.map(([left, right]) => newArr[left]^newArr[right+1]);
};
