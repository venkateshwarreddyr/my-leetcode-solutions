// Problem: Minimum Bit Flips to Convert Number
// LeetCode: https://leetcode.com/problems/minimum-bit-flips-to-convert-number/
// Language: javascript
// Runtime: 55 ms
// Memory: 42.4 MB
// Submitted: 2023-05-10

/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(s, g) {
    s = s.toString(2)
    g = g.toString(2)
    
    let sl = s.length
    let gl = g.length
    let l = Math.max(sl, gl)
    let counter = 0;
    s=("0".repeat(l-sl)+s)
    g=("0".repeat(l-gl)+g)

    for(let i=0;i<l;i++){
        if(s[i] !== g[i]){
            counter++
        }
    }
    
    return counter;
};
