// Problem: Lexicographically Smallest String After Substring Operation
// LeetCode: https://leetcode.com/problems/lexicographically-smallest-string-after-substring-operation/
// Language: javascript
// Runtime: 441 ms
// Memory: 109.8 MB
// Submitted: 2023-06-11

var o = {
    b: 'a',
    c: 'b',
    d: 'c',
    e: 'd',
    f: 'e',
    g: 'f',
    h: 'g',
    i: 'h',
    j: 'i',
    k: 'j',
    l: 'k',
    m: 'l',
    n: 'm',
    o: 'n',
    p: 'o',
    q: 'p',
    r: 'q',
    s: 'r',
    t: 's',
    u: 't',
    v: 'u',
    w: 'v',
    x: 'w',
    y: 'x',
    z: 'y',
}

var smallestString = function(s) {
    // aaaaaaaaaaaaaaaaaaaabcaaaaa
    let a = s.split("")
    
    let n = a.length
    
    let set = new Set(s)
    if(set.size === 1 && set.has('a')) {
        a[a.length-1] = 'z'
        return a.join("")
    }
    
    let nonAOccured = 0
    for (let i=0;i<n;i++) {
        let ch = a[i]
        if (ch === 'a') {
            if (nonAOccured) {
                break
            }
        } else {
            nonAOccured = 1
            a[i] = o[ch]
        }
    }
    return a.join("")
};

