// Problem: Shortest and Lexicographically Smallest Beautiful String
// LeetCode: https://leetcode.com/problems/shortest-and-lexicographically-smallest-beautiful-string/
// Language: javascript
// Runtime: 87 ms
// Memory: 48.7 MB
// Submitted: 2023-10-15

cl = console.log
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var shortestBeautifulSubstring = function(s, k) {
    let n = s.length
    let i=0, j=0
    let an = []
    let pc = 0
    let minLen = Infinity
    while(i<n){
        while(pc===k){
                if(s[j] === "1") pc--
                j++
            }
        if(s[i] === "1") pc++
        i++
        if(pc === k) {
            minLen = Math.min(minLen, i - j)
             an.push(s.substring(i, j))
        }
    }
    while(s[j] !== "1" && j<n){
                j++
            }
if(pc === k) {
            minLen = Math.min(minLen, i - j)
             an.push(s.substring(i, j))
        }
  
    
    
      cl(an, minLen)
    
    an = an.map(e => {
        let s = e.split("")
        while(s[0] === "0") s.shift()
         minLen = Math.min(minLen, s.length)
        return s.join("")
    })
    
    an = an.filter(e => e.length === minLen)
   an.sort()
    return an[0] || ""
};
