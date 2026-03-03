// Problem: Intersection of Multiple Arrays
// LeetCode: https://leetcode.com/problems/intersection-of-multiple-arrays/
// Language: javascript
// Runtime: 69 ms
// Memory: 45.5 MB
// Submitted: 2023-05-24

cl = console.log
var intersection = function (nums) {
    let arr = [...new Set([...nums].flat())]

    let an = []
    for (let c of arr) {
        if (nums.every(e => e.includes(c))) {
            an.push(c)
        }
    }

    return an.sort((a, b) => a - b)
};
