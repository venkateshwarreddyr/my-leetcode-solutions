// Problem: Queries on a Permutation With Key
// LeetCode: https://leetcode.com/problems/queries-on-a-permutation-with-key/
// Language: javascript
// Runtime: 60 ms
// Memory: 44.2 MB
// Submitted: 2023-06-17

cl =console.log
// do again with binary indexed tree
var processQueries = function (queries, m) {
    let a = [...new Array(m)].map((e, i) => i + 1)
    let an = []
    for (let q of queries) {
        let i = a.indexOf(q)
        an.push(i)
        let x = a.splice(i, 1)
        a.unshift(x[0])
    }

    return an;

};
