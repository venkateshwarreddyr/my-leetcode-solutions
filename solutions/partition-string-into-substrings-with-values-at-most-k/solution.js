// Problem: Partition String Into Substrings With Values at Most K
// LeetCode: https://leetcode.com/problems/partition-string-into-substrings-with-values-at-most-k/
// Language: javascript
// Runtime: 176 ms
// Memory: 48.2 MB
// Submitted: 2023-01-03

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minimumPartition = function(s, k) {
    if(s<k) return 1;
    let counter = 0;
    let temp = "";
    for(let c of s){
        if(c>k) return -1;
        temp+=c;
        if(temp>k){
            counter++;
            temp=c;
        }
    }
    if(temp) counter++;
    return counter;
};
