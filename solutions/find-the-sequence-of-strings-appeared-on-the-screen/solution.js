// Problem: Find the Sequence of Strings Appeared on the Screen
// LeetCode: https://leetcode.com/problems/find-the-sequence-of-strings-appeared-on-the-screen/
// Language: javascript
// Runtime: 39 ms
// Memory: 70.6 MB
// Submitted: 2024-10-20

/**
 * @param {string} target
 * @return {string[]}
 */
var stringSequence = function(target) {
    let an = []
    let abc = 'abcdefghijklmnopqrstuvwxyz'

    let i = 0
    let a = ""
    while(i !== target.length) {
        let j = 0
        let curr = a + abc[j]
        while(!target.startsWith(curr)) {
        an.push(curr)

            j++
            curr = a + abc[j]
        }
          an.push(curr)
        i++
        a = curr
    }

    return an
};
