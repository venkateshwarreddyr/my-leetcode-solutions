 const dfsMatrix = (grid) => {
        let c = 0;
        sides = [
            [0, -1], //   W
            [-1, 0], //   N
            [0, 1], //    E
            [1, 0], //    S
        ];
        const matrixOutOfBounds = (r, c, m, n) => r < 0 || c < 0 || r >= m || c >= n;
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === 1) {
                    let stack = [];
                    stack.push([i, j]);
                    while (stack.length != 0) {
                        let [ii, jj] = stack.pop();
                        if (grid[ii][jj]<1) continue;

                        for (let [si, sj] of sides) {
                            if (
                                !matrixOutOfBounds(ii + si, jj + sj, grid.length, grid[0].length)
                            ) {
                                if (grid[ii + si][jj + sj] === 1)
                                    stack.push([ii + si, jj + sj]);
                            }
                        }

                        grid[ii][jj] = -1
                    }
                }

            }
        }

    };