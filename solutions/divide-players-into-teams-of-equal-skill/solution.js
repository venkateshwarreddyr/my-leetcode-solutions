// Problem: Divide Players Into Teams of Equal Skill
// LeetCode: https://leetcode.com/problems/divide-players-into-teams-of-equal-skill/
// Language: javascript
// Runtime: 55 ms
// Memory: 64.4 MB
// Submitted: 2025-10-27

var dividePlayers = function (a) {
    let n = a.length
    a.sort((a, b) => a - b)
    let mustBeCombinedSkill
    let sump = 0
    for (let l = 0, r = n - 1; l < r; l++, r--) {
        let s = a[l] + a[r]
        let p = a[l] * a[r]
        if (mustBeCombinedSkill === undefined) {
            mustBeCombinedSkill = s
        }
        if (mustBeCombinedSkill !== s) return -1
        sump += p
    }
    return sump
};

