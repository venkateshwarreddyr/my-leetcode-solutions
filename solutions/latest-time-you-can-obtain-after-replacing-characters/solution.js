// Problem: Latest Time You Can Obtain After Replacing Characters
// LeetCode: https://leetcode.com/problems/latest-time-you-can-obtain-after-replacing-characters/
// Language: javascript
// Runtime: 55 ms
// Memory: 56.2 MB
// Submitted: 2025-10-12

/**
 * @param {string} s
 * @return {string}
 */
var findLatestTime = function (s) {
    const [inputshh, inputsmm] = s.split(":");
    for (let hh = 11; hh >= 0; hh--) {
        II: for (let mm = 59; mm >= 0; mm--) {
            let shh = "" + hh;
            if (shh.length === 1) shh = "0" + shh;
            let smm = "" + mm;
            if (smm.length === 1) smm = "0" + smm;
            for (let i = 0; i < shh.length; i++) {
                const e = shh[i];
                if (inputshh[i] === "?") {
                } else {
                    if (e !== inputshh[i]) {
                        continue II;
                    }
                }
            }
            for (let i = 0; i < smm.length; i++) {
                const e = smm[i];
                if (inputsmm[i] === "?") {
                } else {
                    if (e !== inputsmm[i]) continue II;
                }
            }
            return shh + ":" + smm;
        }
    }
};
