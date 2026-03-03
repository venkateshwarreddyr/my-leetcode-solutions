// Problem: Mice and Cheese
// LeetCode: https://leetcode.com/problems/mice-and-cheese/
// Language: javascript
// Runtime: 301 ms
// Memory: 80.7 MB
// Submitted: 2023-06-08

/**
  0 1  2  3  4    index
 [1,1, 3, 3, 4]   mice1   2
 [4,4, 0, 1, 1]   mice2

-3 -3  3  2  3    mice1 eats
 3  3 -3 -2 -3    mice2 eats
 */
var miceAndCheese = function (rs1, rs2, k) {
    let diffNi = rs1.map((r1, i) => [rs1[i] - rs2[i], i])
    let mouse1indexs =
         diffNi.sort(([d1, i1], [d2, i2]) => (d2 - d1))
         .slice(0, k).map(([d, i]) => i)

    let setm1 = new Set(mouse1indexs)

    let n = rs1.length
    let s = 0
    for (let i = 0; i < n; i++) {
        if (setm1.has(i)) {
            s += rs1[i]
        } else {
            s += rs2[i]
        }
    }
    return s
};

