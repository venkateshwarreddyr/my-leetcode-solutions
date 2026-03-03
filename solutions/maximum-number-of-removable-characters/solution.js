// Problem: Maximum Number of Removable Characters
// LeetCode: https://leetcode.com/problems/maximum-number-of-removable-characters/
// Language: javascript
// Runtime: 224 ms
// Memory: 59.5 MB
// Submitted: 2021-06-14

/**
 * @param {string} s
 * @param {string} p
 * @param {number[]} removable
 * @return {number}
 */
var maximumRemovals = function(S, P, removable) {
    // S = s.split('');
    // P = p.split('');
    // let removableObj = {}
    function checkForSubSequence (S) {
        let i = 0, j = 0;

        while (i < S.length && j < P.length) {
            if (S[i] === P[j]) {
                j++;
            }
            i++;
        }
        return j === P.length
    }
    let low = 0;
    let high = removable.length-1;
    while(low<=high){
        let mid = low + Math.floor((high-low)/2);
        let x = S.split('');
        for (let i = 0; i <= mid; i++) {
				x[removable[i]] = '';
			}
        // [removable[mid]] = true;
        if(!checkForSubSequence(x)){
            high = mid-1;
        }else{
            low = mid+1;
        }
        
    }
    return low;
    
};
