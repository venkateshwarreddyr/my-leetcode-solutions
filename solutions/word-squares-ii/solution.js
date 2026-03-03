// Problem: Word Squares II
// LeetCode: https://leetcode.com/problems/word-squares-ii/
// Language: javascript
// Runtime: 12 ms
// Memory: 81.3 MB
// Submitted: 2026-01-17

/**
 * @param {string[]} words
 * @return {string[][]}
 */
var wordSquares = function (words) {
    words.sort()
    let n = words.length
    let ans = []

    function bt(arr) {
        if (arr.length === 4) {
            ans.push([...arr])
            return
        }

        for (let i = 0; i < n; i++) {
            let curr = words[i]
            if (arr.includes(curr)) continue
            let [top, left, right] = arr
            if (arr.length === 1) {
                if (top[0] !== curr[0]) continue
            } else if (arr.length === 2) {
                if (top.at(-1) !== curr[0]) continue
            } else if (arr.length === 3) {
                if (left.at(-1) !== curr[0]) continue
                if (right.at(-1) !== curr.at(-1)) continue
            }

            arr.push(curr)
            bt(arr)
            arr.pop()
        }

    }

    bt([])

    return ans
};
