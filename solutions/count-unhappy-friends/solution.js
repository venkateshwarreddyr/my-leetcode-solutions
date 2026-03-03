// Problem: Count Unhappy Friends
// LeetCode: https://leetcode.com/problems/count-unhappy-friends/
// Language: javascript
// Runtime: 2 ms
// Memory: 57.4 MB
// Submitted: 2025-11-21

var unhappyFriends = function (n, preferences, pairs) {
    const rank = new Array(n);

    for (const [a, b] of pairs) {
        rank[a] = preferences[a].indexOf(b);
        rank[b] = preferences[b].indexOf(a);
    }

    let unhappy = 0;

    for (let x = 0; x < n; x++) {

        for (let i = 0; i < rank[x]; i++) {
            let y = preferences[x][i]
            let yPartnerRank = rank[y]
            const yPrefersX = preferences[y].indexOf(x) < yPartnerRank;


            if (yPrefersX) {
                unhappy++;
                break;
            }
        }

    }

    return unhappy;
};

