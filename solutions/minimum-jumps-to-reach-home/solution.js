// Problem: Minimum Jumps to Reach Home
// LeetCode: https://leetcode.com/problems/minimum-jumps-to-reach-home/
// Language: javascript
// Runtime: 23 ms
// Memory: 65.4 MB
// Submitted: 2025-12-18

var minimumJumps = function (forbidden, fwdJumpDist, bwdJumpDist, xHome) {
    const forbid = new Set(forbidden);
    const MAX_X_POS = xHome + Math.max(...forbidden) + fwdJumpDist + bwdJumpDist;
    const vis = new Array(MAX_X_POS + 1).fill().map(() => [false, false]); // vis from [backward, forward] jump

    let [xStart, fromBack, totalJumps] = [0, false, 0];
    const q = [[xStart, fromBack, totalJumps]];
    vis[0][0] = true;

    while (q.length) {
        const [xi, fromBack, totalJumps] = q.shift();
        if (xi === xHome) return totalJumps;

        const xL = xi - bwdJumpDist;
        if (!fromBack && xL >= 0 && !forbid.has(xL) && !vis[xL][0]) {
            vis[xL][0] = true;
            q.push([xL, true, totalJumps + 1]);
        }

        const xR = xi + fwdJumpDist;
        if (xR <= MAX_X_POS && !forbid.has(xR) && !vis[xR][1]) {
            vis[xR][1] = true;
            q.push([xR, false, totalJumps + 1]);
        }
    }

    return -1;
};

