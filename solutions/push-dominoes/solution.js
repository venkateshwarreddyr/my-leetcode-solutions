// Problem: Push Dominoes
// LeetCode: https://leetcode.com/problems/push-dominoes/
// Language: javascript
// Runtime: 52 ms
// Memory: 69.5 MB
// Submitted: 2025-11-20

var pushDominoes = function(dominoes) {
    const n = dominoes.length;
    const forces = new Array(n).fill(0);
    let force = 0;

    for (let i = 0; i < n; i++) {
        if (dominoes[i] === 'R') {
            force = n;
        } else if (dominoes[i] === 'L') {
            force = 0;
        } else {
            force = Math.max(force - 1, 0);
        }
        forces[i] += force;
    }
    console.log(forces)
    force = 0;
    for (let i = n - 1; i >= 0; i--) {
        if (dominoes[i] === 'L') {
            force = n;
        } else if (dominoes[i] === 'R') {
            force = 0;
        } else {
            force = Math.max(force - 1, 0);
        }
        forces[i] -= force;
    }
    console.log(forces)

    let result = '';
    for (let f of forces) {
        if (f === 0) result += '.';
        else if (f > 0) result += 'R';
        else result += 'L';
    }
    console.log(result)
    return result;
};
