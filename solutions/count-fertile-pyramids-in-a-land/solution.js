// Problem: Count Fertile Pyramids in a Land
// LeetCode: https://leetcode.com/problems/count-fertile-pyramids-in-a-land/
// Language: javascript
// Runtime: 99 ms
// Memory: 50.3 MB
// Submitted: 2023-09-15

cl = console.log
function count(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let an = 0
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n - 1; j++) {
            if (grid[i][j] && grid[i - 1][j]) {
                grid[i][j] = Math.min(grid[i - 1][j - 1], grid[i - 1][j + 1]) + 1
                an += grid[i][j] - 1
            }
        }
    }

    return an;
}

function countPyramids(grid) {
    let ans = count(JSON.parse(JSON.stringify(grid)));
    grid.reverse();
    ans += count(JSON.parse(JSON.stringify(grid)));
    return ans;
}

