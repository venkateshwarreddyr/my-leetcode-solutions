// Problem: Largest Magic Square
// LeetCode: https://leetcode.com/problems/largest-magic-square/
// Language: javascript
// Runtime: 458 ms
// Memory: 61.5 MB
// Submitted: 2026-01-18

var largestMagicSquare = function (grid) {
    let maxMSize = Math.min(grid.length, grid[0].length);
    while (maxMSize != 1) {
        for (let iind = 0; iind < grid.length; iind++) {
            for (let jind = 0; jind < grid[0].length; jind++) {
                if (iind + maxMSize <= grid.length && jind + maxMSize <= grid[0].length) {
                    let newGrid = [];
                    for (let i = iind; i < maxMSize + iind; i++) {
                        let arr = []
                        for (let j = jind; j < maxMSize + jind; j++) {
                            arr.push(grid[i][j]);

                        }
                        newGrid.push(arr);
                    }
                    let newArr = []
                    let dag = 0;
                    let fdag = 0;
                    for (let i = 0; i < newGrid.length; i++) {
                        let row = 0;
                        let col = 0;
                        for (let j = 0; j < newGrid[0].length; j++) {
                            row += newGrid[i][j];
                            col += newGrid[j][i];
                            if (i === j)
                                dag += newGrid[i][j];
                            if (i + j === maxMSize - 1)
                                fdag += newGrid[i][j]
                        }
                        newArr.push(row)
                        newArr.push(col)
                    }
                    newArr.push(fdag)
                    newArr.push(dag)
                    // console.log({newArr, maxMSize})
                    if ((new Set(newArr)).size === 1) return maxMSize;
                }
            }
        }
        maxMSize--
    }
    return 1;
};
