// Problem: Shortest String That Contains Three Strings
// LeetCode: https://leetcode.com/problems/shortest-string-that-contains-three-strings/
// Language: javascript
// Runtime: 175 ms
// Memory: 55.1 MB
// Submitted: 2023-07-30

cl = console.log
/**
 * @param {string} a
 * @param {string} b
 * @param {string} c
 * @return {string}
 */
var minimumString = function (a, b, c) {
    function merge(a, b) {
        if (a.includes(b)) return [a]
        if (b.includes(a)) return [b]
        let an = [a + b]
        // a back
        xx:
        for (let x = 0; x < a.length; x++) {
            for (let i = x, j = 0; j < b.length && i < a.length;) {

                if (a[i] === b[j]) {
                    i++
                    j++

                    if (i === a.length) {
                        an.push(
                            a.slice(0, x) + b
                        )
                        break xx;
                    }
                } else {
                    break;
                }
            }
        }

        return an
    }
    function calc(a, b, c) {
        let an = []
        let xx = merge(b, c)

        for (let x of xx)
            an.push(...merge(a, x))

        return an
    }

    let ways = [
        [a, b, c],
        [a, c, b],
        [b, a, c],
        [b, c, a],
        [c, a, b],
        [c, b, a],
    ]
    let an = []
    for (let way of ways) {
        an.push(...calc(...way))
    }

    an.sort((a, b) => a.length - b.length || a.localeCompare(b)).filter(e => e.length)

    return an[0]
}
