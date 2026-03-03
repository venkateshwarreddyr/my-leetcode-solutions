// Problem: Sort the People
// LeetCode: https://leetcode.com/problems/sort-the-people/
// Language: javascript
// Runtime: 87 ms
// Memory: 46.4 MB
// Submitted: 2023-05-10

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    return names.map((e, i) => ({name: e, height: heights[i]})).sort((a, b) => b.height-a.height).map(e => e.name)
};
