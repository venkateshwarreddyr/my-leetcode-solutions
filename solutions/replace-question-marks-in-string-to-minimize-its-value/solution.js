// Problem: Replace Question Marks in String to Minimize Its Value
// LeetCode: https://leetcode.com/problems/replace-question-marks-in-string-to-minimize-its-value/
// Language: javascript
// Runtime: 299 ms
// Memory: 68.1 MB
// Submitted: 2024-04-16

/**
 * @param {string} s
 * @return {string}
 */
var minimizeStringValue = function(s) {
    let abc = {};

    for(let c of 'abcdefghijklmnopqrstuvwxyz') {
        abc[c] = abc[c] || 0
        abc[c] ++
    }
    
    // let cc = 0
    const { PriorityQueue } = require("@datastructures-js/priority-queue");
    const pq = new PriorityQueue({ compare: (a, b) => a.p - b.p || a.c > b.c }); // increasing

    for(let char of s) {
        if(char === '?') continue
        else {
            abc[char]++
        }
    }

    for(let key in abc) {
         pq.enqueue({
                p: abc[key],
                c: key
            })
    }
    
    let an = []
      for(let char of s) {
        if(char === '?') {
           let {c, p} = pq.dequeue()
an.push(c)
            pq.enqueue({
                p: p+1,
                c
            })
        }
        
    }
    an.sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0))
    let ans = ""

    for(let c of s) {
         if(c === '?') {
            ans+=an.pop()
         } else {
            ans+=c
         }
    }
    return ans
};
