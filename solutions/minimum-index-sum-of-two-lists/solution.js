// Problem: Minimum Index Sum of Two Lists
// LeetCode: https://leetcode.com/problems/minimum-index-sum-of-two-lists/
// Language: javascript
// Runtime: 81 ms
// Memory: 52.7 MB
// Submitted: 2023-05-30

cl = console.log
var findRestaurant = function (list1, list2) {
    let an = []
    let ob2 = {}
    let minx = Infinity
    let j = 0
    for (let e of list2) {
        ob2[e] = j
        j++;
    }

    let i = 0
    for (let e of list1) {
        let j = ob2[e] === undefined ? -1 : ob2[e]
        if (j > -1) {
            let x = i + j
            if (x === minx) {
                an.push(e)
            } else if (x < minx) {
                minx = x
                an = [e]
            }
        }
        i++
    }

    return an
};
