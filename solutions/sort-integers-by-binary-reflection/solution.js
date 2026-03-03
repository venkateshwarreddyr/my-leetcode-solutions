// Problem: Sort Integers by Binary Reflection
// LeetCode: https://leetcode.com/problems/sort-integers-by-binary-reflection/
// Language: javascript
// Runtime: 120 ms
// Memory: 60.9 MB
// Submitted: 2025-12-09

var sortByReflection = function (nums) {
    const reflection = (n) => +n.toString(2).split("").reverse().join("");
    nums.sort((a, b) => {
        return reflection(a) - reflection(b) || a - b;
    });
    return nums;
};

