// Problem: Count Good Triplets
// LeetCode: https://leetcode.com/problems/count-good-triplets/
// Language: javascript
// Runtime: 103 ms
// Memory: 38.5 MB
// Submitted: 2022-01-05

/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
    let res = 0
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            for(let k = j+1; k<arr.length; k++){
                if(Math.abs(arr[i] - arr[j]) <= a){
                    if(Math.abs(arr[j] - arr[k]) <= b){
                        if(Math.abs(arr[i] - arr[k]) <= c){
res++
                    }
                }
                }
            }
        }
    }
    return res
};
