// Problem: Check if All the Integers in a Range Are Covered
// LeetCode: https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/
// Language: javascript
// Runtime: 80 ms
// Memory: 40.3 MB
// Submitted: 2021-06-12

/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function(ranges, left, right) {
    let newArr = [];
    for(let i = left; i<=right;i++){
        // newArr.push(i)
    }
    let bigArr = []
    let flag = false;
    for(let range of ranges){
        const [l,r] = range;
        // let smallArr = []
        for(let i = l; i<=r;i++){
            bigArr.push(i)
        }
    }
    // bigArr = bigArr.sort((i,j) => i-j);
    for(let i = left; i<=right;i++){
        if(!bigArr.includes(i))
            return false;
    }
    return true;
};
