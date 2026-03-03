// Problem: Number of Good Ways to Split a String
// LeetCode: https://leetcode.com/problems/number-of-good-ways-to-split-a-string/
// Language: javascript
// Runtime: 72 ms
// Memory: 44.2 MB
// Submitted: 2023-07-04

cl = console.log
/**
 * @param {string} s
 * @return {number}
 */
var numSplits11 = function (s) {
    let obl = {}
    let obr = {}

    for (let e of s) {
        obr[e] = obr[e] || 0;
        obr[e]++;
    }
    let cc = 0
    for (let e of s) {
        obl[e] = obl[e] || 0;
        obl[e]++;
        obr[e]--;
        if (obr[e] === 0) delete obr[e]

        if (Object.keys(obl).length === Object.keys(obr).length) {
            cc++
        }
    }

    return cc;
};

var numSplits = function (s) {
    let arl = new Array(26).fill(0)
    let arr = new Array(26).fill(0)

    let cc = 0, l = 0, r = 0
    for (let e of s) {
        arr[e.charCodeAt() - 97]++;
        if (arr[e.charCodeAt() - 97] === 1) r++
    }
    for (let e of s) {
        arl[e.charCodeAt() - 97]++;
        arr[e.charCodeAt() - 97]--;
        if (arl[e.charCodeAt() - 97] === 1) l++
        if (arr[e.charCodeAt() - 97] === 0) r--

        if (l === r) {
            cc++
        }
    }

    return cc;
};
