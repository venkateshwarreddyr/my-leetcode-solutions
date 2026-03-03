// Problem: Find All Groups of Farmland
// LeetCode: https://leetcode.com/problems/find-all-groups-of-farmland/
// Language: javascript
// Runtime: 243 ms
// Memory: 85.7 MB
// Submitted: 2023-07-15

var findFarmland = function (g) {
    let m = g.length;
    let n = g[0].length;

    let ret = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (g[i][j]) {
                let starti = i,
                    startj = j,
                    endi = i,
                    endj = j;

                for (; endj < n && g[endi][endj]; endj++) { }
                // if (endj >= n) endj--;
                while (!g[endi][endj]) endj--;

                for (; endi < m && g[endi][endj]; endi++) { }
                if (endi >= m) endi--;
                while (!g[endi][endj]) endi--;

                ret.push([starti, startj, endi, endj]);
                for (let i = starti; i <= endi; i++)
                    for (let j = startj; j <= endj; j++)
                        g[i][j] = 0;
            }
        }
    }

    return ret;
};
