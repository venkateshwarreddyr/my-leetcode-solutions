// Problem: Minimum Deletions to Make String K-Special
// LeetCode: https://leetcode.com/problems/minimum-deletions-to-make-string-k-special/
// Language: javascript
// Runtime: 159 ms
// Memory: 57.3 MB
// Submitted: 2024-03-17

/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumDeletions = function(s, k) {
    let ob = {};
    
    for(let c of s) {
        ob[c] = ob[c] || 0
        ob[c]++
    }
    
    let a = Object.values(ob);
    a.sort((a, b) => a - b);
    // console.log(a);
    
    function generateSubarrays(arr) {
        const subarrays = [];
        for (let start = 0; start < arr.length; start++) {
            for (let end = start + 1; end <= arr.length; end++) {
                subarrays.push(arr.slice(start, end));
            }
        }
        return subarrays;
    }
    let total = a.reduce((a, c) => a + c, 0);
    let subarrays = generateSubarrays(a)
    let an = Infinity
    for(let sa of subarrays) {
        let stotal = sa.reduce((a, c) => a + c, 0);
        
//         for(let i=0; i<subarray.length; i++) {
//             let min = subarray[i] - k
//             let max = subarray[i] + k
//             for(let j = 0;j<subarray.length; j++) {
                
//             }
//         }
        
        let min = Math.min(...sa)
        let calc = 0
        for(let e of sa) {
            if(min + k < e) {
                stotal -= (e - min - k)
            }
        }
        // console.log(sa,  total - stotal)
        // console.log(min, max, sa)
        // if(max - min <= k) {
            an = Math.min(an, total - stotal)
        // }
    }
    // console.log()
    return an
    
    
};
