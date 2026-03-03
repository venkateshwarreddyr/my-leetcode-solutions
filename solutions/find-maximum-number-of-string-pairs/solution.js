// Problem: Find Maximum Number of String Pairs
// LeetCode: https://leetcode.com/problems/find-maximum-number-of-string-pairs/
// Language: javascript
// Runtime: 77 ms
// Memory: 46.8 MB
// Submitted: 2023-06-24

var maximumNumberOfStringPairs = function(ws) {
    let n = ws.length
    
    let set = new Set()
    let cc = 0
    for (let i=0;i<n;i++) {
    for (let j=i+1;j<n;j++) {
        let w1 = ws[i]
        let w2 = ws[j]
        if (!set.has(i) && !set.has(j) && (w1 === w2.split("").reverse().join(""))) {
            cc++
            set.add(i)
            set.add(j)
        }
    }
    }
    return cc
};

