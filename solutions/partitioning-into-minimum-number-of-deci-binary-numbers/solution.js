// Problem: Partitioning Into Minimum Number Of Deci-Binary Numbers
// LeetCode: https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/
// Language: javascript
// Runtime: 136 ms
// Memory: 51.4 MB
// Submitted: 2023-06-02

var minPartitions = function(s) {
    return [...s]
        .map( x => +x )
        .reduce( (max,x) => Math.max(max,x), -Infinity )
};

