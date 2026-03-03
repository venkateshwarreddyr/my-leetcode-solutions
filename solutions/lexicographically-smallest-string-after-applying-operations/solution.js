// Problem: Lexicographically Smallest String After Applying Operations
// LeetCode: https://leetcode.com/problems/lexicographically-smallest-string-after-applying-operations/
// Language: javascript
// Runtime: 219 ms
// Memory: 62.8 MB
// Submitted: 2025-10-19

var findLexSmallestString = function (s, a, b) {
    const n = s.length;
    let res = s;
    s = s + s;
    const g = gcd(b, n);
    for (let i = 0; i < n; i += g) {
        for (let j = 0; j < 10; j++) {
            const kLimit = b % 2 === 0 ? 0 : 9;
            for (let k = 0; k <= kLimit; k++) {
                const t = [...s.slice(i, i + n)];
                for (let p = 1; p < n; p += 2) {
                    t[p] = String.fromCharCode(
                        "0".charCodeAt() +
                            ((t[p].charCodeAt() - "0".charCodeAt() + j * a) %
                                10),
                    );
                }
                for (let p = 0; p < n; p += 2) {
                    t[p] = String.fromCharCode(
                        "0".charCodeAt() +
                            ((t[p].charCodeAt() - "0".charCodeAt() + k * a) %
                                10),
                    );
                }
                const tStr = t.join("");
                if (tStr < res) {
                    res = tStr;
                }
            }
        }
    }
    return res;
};

const gcd = (num1, num2) => {
    while (num2 !== 0) {
        const temp = num1;
        num1 = num2;
        num2 = temp % num2;
    }
    return num1;
};
