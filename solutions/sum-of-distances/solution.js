// Problem: Sum of Distances
// LeetCode: https://leetcode.com/problems/sum-of-distances/
// Language: javascript
// Runtime: 111 ms
// Memory: 102.4 MB
// Submitted: 2026-01-19

/*
    a        ?      10                      10          10    

    i        1        2                    3                4        5          6
    pre      1        3                    6                10       15         21
    j        0        1                    2                3        4          5

             3-1  3-2                           4-3    5-3    6-3
            =3+3- 1-2                          =4+5+6    -3-3-3
            =3*2-(1+2)                         =4+5+6    -3*(3)
            =i*j-pre[j-1]                    =pre[n-1]-pre[j]    -i*(n-1-j)
*/

var distance = function (a) {
    let o = {}
    a.forEach((e, i) => o[e] = []);
    a.forEach((e, i) => o[e].push(i));

    let arr = []; // answer
    for (let ai of Object.values(o)) {
        if (ai.length === 1) {
            let i = ai[0]
            arr[i] = 0; // If there is no such j, set arr[i] to be 0.
        } else {
            let n = ai.length,
                sum = 0,
                pre = [];
            ai.forEach((e) => pre.push((sum += e)))
            ai.forEach((e, i) => {
                let leftDiffSum = e * i - (pre[i - 1] || 0);
                let rightDiffSum = pre[n - 1] - (pre[i] || 0) - e * (n - 1 - i);
                arr[e] = leftDiffSum + rightDiffSum;
            });
        }
    }
    return arr;
};

