// Problem: Find Duplicate File in System
// LeetCode: https://leetcode.com/problems/find-duplicate-file-in-system/
// Language: javascript
// Runtime: 140 ms
// Memory: 62 MB
// Submitted: 2023-06-30

cl = console.log
/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function (paths) {


    let ob = {}
    for (let path of paths) {
        let [root, ...rest] = path.split(" ")
        for (let e of rest) {
            let [x, y] = e.split("(")
            ob[y] = ob[y] || []
            ob[y].push(root + "/" + x)
        }
    }

    return Object.values(ob).filter(e => e.length > 1)
};
