// Problem: Delete Columns to Make Sorted
// LeetCode: https://leetcode.com/problems/delete-columns-to-make-sorted/
// Language: javascript
// Runtime: 5 ms
// Memory: 58.2 MB
// Submitted: 2025-12-20

/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let n = strs.length;
    let c = 0;

    for(let j=0;j<strs[0].length;j++){
        let an = true;
        for(let i=1;i<n;i++){
            if(strs[i-1][j] > strs[i][j]){
                c++;
                break;
            }
        }
    }
    
    return c
};
