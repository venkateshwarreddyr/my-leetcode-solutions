// Problem: Available Captures for Rook
// LeetCode: https://leetcode.com/problems/available-captures-for-rook/
// Language: javascript
// Runtime: 64 ms
// Memory: 42.2 MB
// Submitted: 2023-07-15

var numRookCaptures = function (g) {
    let r1 = 0,
        r2 = 7,
        c1 = 0,
        c2 = 7,
        i,
        j;

    let rR = 0;
    let cR = 0;
    for (let i = r1; i <= r2; i++) {
        for (let j = c1; j <= c2; j++) {
            if (g[i][j] == "R") {
                rR = i;
                cR = j;
                break;
            }
        }
    }

    // ------------------------------------------------

    let cc = 0;

    // i-1,j-1             i,j-1               i+1,j-1
    i = rR;
    j = cR - 1;
    for (; j >= c1; j--) {
        if (g[i][j] != ".") {
            if (g[i][j] == "p") {
                cc++;
            }
            break;
        }
    }

    // i-1,j                 i,j               i+1,j
    i = rR - 1;
    j = cR;
    for (; i >= r1; i--) {
        if (g[i][j] != ".") {
            if (g[i][j] == "p") {
                cc++;
            }
            break;
        }
    }

    i = rR + 1;
    j = cR;
    for (; i <= r2; i++) {
        if (g[i][j] != ".") {
            if (g[i][j] == "p") {
                cc++;
            }
            break;
        }
    }

    // i-1,j+1             i,j+1               i+1,j+1
    i = rR;
    j = cR + 1;
    for (; j <= c2; j++) {
        if (g[i][j] != ".") {
            if (g[i][j] == "p") {
                cc++;
            }
            break;
        }
    }

    return cc;
};

