// Problem: Minimum Additions to Make Valid String
// LeetCode: https://leetcode.com/problems/minimum-additions-to-make-valid-string/
// Language: javascript
// Runtime: 81 ms
// Memory: 45.2 MB
// Submitted: 2023-06-06

var addMinimum = function (w) {
    let n = w.length;

    let cc = 0;
    for (let i = 0; i < n; i++) {
        if (w[i] === "a") {
            if (w[i + 1] === "b") {
                if (w[i + 2] === "c") {
                    i += 2; // all good
                } else {
                    i += 1;
                    cc++; // for missing    c
                }
            } else if (w[i + 1] === "c") {
                i += 1; // for missing    b
                cc++;
            } else {
                cc += 2; // for missing    bc
            }
        } else if (w[i] === "b") {
            if (w[i + 1] === "c") {
                i += 1;
                cc += 1; // for missing    a
            } else {
                cc += 2; // for missing    a    c
            }
        } else {
            cc += 2; // for missing    ab
        }
    }
    return cc;
};

