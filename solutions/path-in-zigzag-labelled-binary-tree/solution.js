// Problem: Path In Zigzag Labelled Binary Tree
// LeetCode: https://leetcode.com/problems/path-in-zigzag-labelled-binary-tree/
// Language: javascript
// Runtime: 200 ms
// Memory: 112.4 MB
// Submitted: 2023-06-03

cl = console.log
var pathInZigZagTree = function (label) {
    let i = 1
    let a = [i]
    let level = 1
    while (i < label) {
        let c = Math.pow(2, level) + i
        if (level % 2 === 1) {
            let j = c
            while (i < j) {
                a.push(j)
                j--
            }
            i = c
        } else {
            while (i < c) {
                i++
                a.push(i)
            }
        }
        level++
    }

    let an = []
    let indexOfLabel = a.indexOf(label) + 1

    while (indexOfLabel) {
        an.unshift(a[indexOfLabel - 1])
        cl(indexOfLabel)
        indexOfLabel = Math.floor(indexOfLabel / 2)
    }

    return an
};
