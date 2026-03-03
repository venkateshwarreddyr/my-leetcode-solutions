// Problem: Shortest Distance to a Character
// LeetCode: https://leetcode.com/problems/shortest-distance-to-a-character/
// Language: javascript
// Runtime: 69 ms
// Memory: 44.4 MB
// Submitted: 2023-05-12

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    let n = s.length;
    let an = new Array(n).fill(Infinity);
    let prev = Infinity;
    for(let i=0;i<n;i++){
        if(s[i] === c){
           prev=i
        }
        an[i] = Math.abs(i-prev)
    }

    prev = Infinity;
    for(let i=n-1;i>-1;i--){
        if(s[i] === c){
            prev=i
        }
         an[i] = Math.min(an[i], prev-i)
    }

    return an
};
