// Problem: Nearest Exit from Entrance in Maze
// LeetCode: https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/
// Language: javascript
// Runtime: 140 ms
// Memory: 48.5 MB
// Submitted: 2021-07-22

/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(grid, entrance) {
 const sides = [
    [0, -1], //   W
    [-1, 0], //   N
    [0, 1], //    E
    [1, 0], //    S
  ];
  const matrixOutOfBounds = (r, c, m, n) => r < 0 || c < 0 || r >= m || c >= n;
    // let minn = Number.MAX_SAFE_INTEGER;
    // let obj ={}
    grid[entrance[0]][entrance[1]] = 0;
    let queue = [entrance]
    while(queue.length>0){
        // console.log(grid)
        let [ii, jj] = queue.shift();
        if(([0,grid.length-1].includes(ii)||[0,grid[0].length-1].includes(jj)) && `${ii},${jj}`!== entrance.join(',')){
            return grid[ii][jj];
        }
        for (let [si, sj] of sides) {
             if ( !matrixOutOfBounds(ii + si, jj + sj, grid.length, grid[0].length) && grid[ii + si][jj + sj]==='.') {
               queue.push([ii + si, jj + sj]);
                grid[ii + si][jj + sj] = grid[ii][jj] + 1
             }
           }
        }
    return -1;
};

