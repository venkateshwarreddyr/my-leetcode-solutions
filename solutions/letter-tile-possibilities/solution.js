// Problem: Letter Tile Possibilities
// LeetCode: https://leetcode.com/problems/letter-tile-possibilities/
// Language: javascript
// Runtime: 69 ms
// Memory: 45.8 MB
// Submitted: 2023-07-11

cl = console.log
/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (ss) {
    let set = new Set()
    let n = ss.length
    let iset = new Array(n).fill(0)
    function bt(s) {
        if (s.length === n) {
            return;
        }
        let i = 0
        for (let c of ss) {
            if (!iset[i]) {
                if (!set.has(s + c)) {
                    iset[i] = 1
                    set.add(s + c)
                    bt(s + c)
                    iset[i] = 0
                }
            }
            i++
        }
    }

    bt("")

    return set.size
};
