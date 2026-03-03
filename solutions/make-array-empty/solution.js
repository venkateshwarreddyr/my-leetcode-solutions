// Problem: Make Array Empty
// LeetCode: https://leetcode.com/problems/make-array-empty/
// Language: javascript
// Runtime: 312 ms
// Memory: 90.4 MB
// Submitted: 2023-06-13

var countOperationsToEmptyArray = function (a) {
    let s = 0
    while (a.length) {
        let min = a.reduce((min, e) => Math.min(min, e))
        if (a[0] === min) {
            a.shift()
        } else {
            a.push(a.shift())
        }
        s++
    }
    return s
}

var countOperationsToEmptyArray = function (a) {
    // cl = console.log
    // cl(a)
    a = a.map((e, i) => [e, i])
    a.sort((a, b) => a[0] - b[0])

    // cl('[' + a.join("],[") + ']')
    let n = a.length
    let s = n
    for (let i = 1; i < n; i++) {
        if (a[i - 1][1] > a[i][1]) {
            // problem
            s += n - i // remainingOnRight
        }
    }
    return s
}

/*
1 2 3           1(0) 2(1) 3(2)
2 3
    3

3 2 1           1(2) 2(1) 3(0)
2 1 3
1 3 2
  3 2
    2 3
      3
      empty
*/

