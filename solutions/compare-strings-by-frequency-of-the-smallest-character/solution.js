// Problem: Compare Strings by Frequency of the Smallest Character
// LeetCode: https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/
// Language: javascript
// Runtime: 114 ms
// Memory: 49.1 MB
// Submitted: 2023-07-13

cl = console.log
function bs(a, tar, lo = 0, hi = a.length - 1) {
    while (lo <= hi) {
        let mid = Math.trunc(lo / 2 + hi / 2)
        // if (mid === tar) {   // a is not there
        // if (a[mid] === a[mid-1]) {  // tar is there
        if (a[mid] > tar) {
            // a is there
            hi = mid - 1 //       tar on left/current
            // return mid //           found
            // } else if (mid < tar) {
        } else
            lo = mid + 1 //  
    }
    return hi //                     found
}

var numSmallerByFrequency = function (queries, words) {
    function fn(s) {
        let max = 1
        let minc = s[0]
        let ob = {}
        for (let c of s) {
            ob[c] = ob[c] || 0
            ob[c]++

            if (c < minc) {
                minc = c
                max = 1
            } else if (c === minc) {
                max = Math.max(max, ob[c])
            }
        }

        return max
    }
    words = words.map(fn).sort((a, b) => a - b)

    return queries.map(q => {
        let qcc = fn(q)
        return words.length - bs(words, qcc) - 1;
    })

};
