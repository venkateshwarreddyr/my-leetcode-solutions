// Problem: Relative Ranks
// LeetCode: https://leetcode.com/problems/relative-ranks/
// Language: javascript
// Runtime: 62 ms
// Memory: 52.2 MB
// Submitted: 2024-05-08

cl = console.log
var findRelativeRanks = function (score) {
    let sortscore = [...score].sort((a, b) => b - a);
    cl(sortscore)
    let robj = {}
    sortscore.forEach((e, i) => {
        robj[e] = i + 1
    })

    return score.map(e => {
        if (robj[e] === 1) {
            return "Gold Medal"
        }
        if (robj[e] === 2) {
            return "Silver Medal"
        }
        if (robj[e] === 3) {
            return "Bronze Medal"
        }

        return robj[e].toString()
    })
};
