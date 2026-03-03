// Problem: Maximum Matching of Players With Trainers
// LeetCode: https://leetcode.com/problems/maximum-matching-of-players-with-trainers/
// Language: javascript
// Runtime: 215 ms
// Memory: 53.9 MB
// Submitted: 2023-07-22

cl = console.log
/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function (players, trainers) {
    players.sort((a, b) => a - b)
    trainers.sort((a, b) => a - b)
    let m = players.length
    let n = trainers.length
    let cc = 0
    for (let i = 0, j = 0; i < m && j < n;) {
        if (players[i] <= trainers[j]) {
            cc++
            i++
            j++
        } else {
            j++
        }
    }

    return cc;
};
