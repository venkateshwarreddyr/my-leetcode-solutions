// Problem: Jump Game VII
// LeetCode: https://leetcode.com/problems/jump-game-vii/
// Language: javascript
// Runtime: 1191 ms
// Memory: 85.6 MB
// Submitted: 2023-06-08

cl = console.log
var canReach = function (s, minJump, maxJump) {
    let queue = [0]
    let visited = new Set()
    let mx = 0
    while (queue.length) {
        let i = queue.shift()
        let j = Math.max(i + minJump, mx + 1)
        while (j < Math.min(i + maxJump + 1, s.length)) {
            if (s[j] === '0' && !visited.has(j)) {
                if (j === s.length - 1) return true
                queue.push(j)
                visited.add(j)
            }
            j++
        }
        mx = i + maxJump
    }

    return false
};
