// Problem: Group the People Given the Group Size They Belong To
// LeetCode: https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/
// Language: javascript
// Runtime: 76 ms
// Memory: 45.9 MB
// Submitted: 2023-09-11

cl = console.log
var groupThePeople = function (a) {
    let an = []
    let obj = {}
    for (let i = 0; i < a.length; i++) {
        if (obj[a[i]]) {
            obj[a[i]].push(i)
        } else {
            obj[a[i]] = [i]
        }
        if (obj[a[i]].length === a[i]) {
            an.push(obj[a[i]])
            delete obj[a[i]]
        }
    }
    return an;
};
