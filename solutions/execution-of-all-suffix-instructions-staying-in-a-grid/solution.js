// Problem: Execution of All Suffix Instructions Staying in a Grid
// LeetCode: https://leetcode.com/problems/execution-of-all-suffix-instructions-staying-in-a-grid/
// Language: javascript
// Runtime: 116 ms
// Memory: 44.4 MB
// Submitted: 2023-06-17

const matrixOutOfBounds = (r, c, m, n) => r < 0 || c < 0 || r >= m || c >= n;
cl = console.log
var executeInstructions = function (n, startPos, s) {
    let an = [];

    xx:
    for (let k = 0; k < s.length; k++) {
        let [i, j] = startPos;
        let l = k
        for (; l < s.length; l++) {
            switch (s[l]) {
                case 'L': {
                    j--;
                    break;
                }
                case 'R': {
                    j++;
                    break;
                }
                case 'U': {
                    i--;
                    break;
                }
                case 'D': {
                    i++;
                    break;
                }
            }
            if (matrixOutOfBounds(i, j, n, n)) {
                an.push(l - k);
                continue xx;
            }
        }
        an.push(s.length - k);
    }

    return an;
};
