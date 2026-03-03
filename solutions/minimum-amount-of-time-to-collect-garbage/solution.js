// Problem: Minimum Amount of Time to Collect Garbage
// LeetCode: https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/
// Language: javascript
// Runtime: 128 ms
// Memory: 57.6 MB
// Submitted: 2023-06-15

cl = console.log
var garbageCollection = function (garbage, travel) {
    let ttime = 0
    let ob = {
        G: 0,
        P: 0,
        M: 0,
    }
    let n = garbage.length;


    let t = 0
    for (let i = 0; i < n; i++) {
        let g = garbage[i]
        t += travel[i - 1] || 0
        if (g.includes('G')) {
            ob['G'] = t
        }
        if (g.includes('P')) {
            ob['P'] = t
        }
        if (g.includes('M')) {
            ob['M'] = t
        }

        ttime += g.length

    }

    return ttime + ob['G'] + ob['P'] + ob['M'];
};

// [2,4,3]
// [0,2,6,9]
