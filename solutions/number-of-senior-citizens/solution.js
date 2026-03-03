// Problem: Number of Senior Citizens
// LeetCode: https://leetcode.com/problems/number-of-senior-citizens/
// Language: javascript
// Runtime: 52 ms
// Memory: 50.4 MB
// Submitted: 2024-08-01

/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    return (details.map(d => Number(''+d[11]+d[12])).reduce((a, c) => {
        if(c>60){
            a++
        }
        return a
    }, 0));
    // return details.map(d => Number(''+d[12]+d[13]))
};
