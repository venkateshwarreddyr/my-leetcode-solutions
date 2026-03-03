// Problem: Two-Letter Card Game
// LeetCode: https://leetcode.com/problems/two-letter-card-game/
// Language: javascript
// Runtime: 15 ms
// Memory: 72.1 MB
// Submitted: 2025-09-11

var score = function (cards, x) {
    let wilds = 0;
    const countL = Array(10).fill(0);
    const countR = Array(10).fill(0);

    for (const card of cards) {
        const a = card[0], b = card[1];
        if (a === x && b === x) {
            wilds++;
        } else if (a === x) {
            countL[b.charCodeAt(0) - 97]++;
        } else if (b === x) {
            countR[a.charCodeAt(0) - 97]++;
        }
    }

    let pairs = 0;
    let free = 0;

    for (const count of [countL, countR]) {
        const s = count.reduce((acc, v) => acc + v, 0);
        const m = Math.max(...count);
        const p = Math.min(s - m, Math.floor(s / 2));
        pairs += p;
        free += s - 2 * p;
    }

    const used = Math.min(wilds, free);
    wilds -= used;

    const extra = Math.min(pairs, Math.floor(wilds / 2));

    return pairs + used + extra;
};

