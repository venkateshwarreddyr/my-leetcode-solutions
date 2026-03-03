// Problem: Rank Teams by Votes
// LeetCode: https://leetcode.com/problems/rank-teams-by-votes/
// Language: javascript
// Runtime: 19 ms
// Memory: 61 MB
// Submitted: 2025-11-29

/**
 * @param {string[]} votes
 * @return {string}
 */
var rankTeams = function (votes) {
    if (votes.length === 1) return votes[0];

    const n = votes[0].length;
    const voteCount = new Map();

    for (const team of votes[0]) {
        voteCount.set(team, new Array(n).fill(0));
    }

    for (const vote of votes) {
        for (let i = 0; i < vote.length; i++) {
            const team = vote[i];
            voteCount.get(team)[i]++;
        }
    }

    const teams = [...votes[0]];
    teams.sort((a, b) => {
        const votesA = voteCount.get(a);
        const votesB = voteCount.get(b);

        for (let i = 0; i < n; i++) {
            if (votesA[i] !== votesB[i]) {
                return votesB[i] - votesA[i];
            }
        }

        return a.localeCompare(b);
    });

    return teams.join('');
};
