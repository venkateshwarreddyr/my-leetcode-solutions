// Problem: Detect Cycles in 2D Grid
// LeetCode: https://leetcode.com/problems/detect-cycles-in-2d-grid/
// Language: javascript
// Runtime: 615 ms
// Memory: 112 MB
// Submitted: 2023-05-19

// cl = console.log
var containsCycle = function (grid) {
    let m = grid.length;
    let n = grid[0].length;

    const matrixOutOfBounds = (r, c, m, n) => r < 0 || c < 0 || r >= m || c >= n;
    sides = [
        [0, -1], //   W
        [-1, 0], //   N
        [0, 1], //    E
        [1, 0], //    S
    ];
    getHash = (i, j) => `${i},${j}`;
    const dfsMatrix = () => {
        superVisited = new Set()
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (!superVisited.has(getHash(i, j))) {
                    let c = grid[i][j];
                    let stack = [];
                    let pos = 0;
                    stack.push([i, j, null]);
                    let visited = new Set();
                    while (stack.length != 0) {
                        // cl(stack)
                        let [ii, jj, parentHash] = stack.pop();
                        // if (grid[ii][jj] === -1) continue;
                        // grid[ii][jj] = -1;
                        const hash = getHash(ii, jj)
                        visited.add(hash);
                        superVisited.add(hash)
                        for (let [si, sj] of sides) {
                            if (
                                !matrixOutOfBounds(ii + si, jj + sj, grid.length, grid[0].length)
                            ) {

                                let newHash = getHash(ii + si, jj + sj)
                                if (grid[ii + si][jj + sj] === c) {
                                    // cl({ hash, visited, newHash, parentHash })
                                    if (newHash === parentHash) continue;
                                    if (visited.has(newHash)) return true;
                                    stack.push([ii + si, jj + sj, hash]);
                                }
                            }
                        }

                    }
                }

            }
        }

        return false;

    };

    return dfsMatrix();
};
