// Problem: Rings and Rods
// LeetCode: https://leetcode.com/problems/rings-and-rods/
// Language: javascript
// Runtime: 76 ms
// Memory: 38.9 MB
// Submitted: 2021-12-17

/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    let arr = [new Set(),new Set(),new Set(),new Set(),new Set(),new Set(),new Set(),new Set(),new Set(),new Set()]
    for(let i=0;i<rings.length;i+=2){
        arr[Number(rings[i+1])].add(rings[i])
    }
    let counter = 0;
    arr.forEach(e => {
        if(e.size === 3) counter++
    })
    return counter;
};
