// Problem: Find The First Player to win K Games in a Row
// LeetCode: https://leetcode.com/problems/find-the-first-player-to-win-k-games-in-a-row/
// Language: javascript
// Runtime: 109 ms
// Memory: 68.1 MB
// Submitted: 2024-06-08

/**
 * @param {number[]} skills
 * @param {number} k
 * @return {number}
 */
var findWinningPlayer = function(skills, k) {
    let i = 0, j = 1
    let n = skills.length
    let ob = {}
    while(i<n && j < n) {
        ob[i] = ob[i] ?? 0
        ob[j] = ob[j] ?? 0
        if(skills[i] > skills[j]) {
            ob[i]++
            j = Math.max(i, j) + 1
            if(ob[i] === k) return i
        } else {
            ob[j]++
            i = Math.max(i, j) + 1
             if(ob[j] === k) return j
        }
    }
    
    return Math.min(i, j)
};
