// Problem: Spiral Matrix II
// LeetCode: https://leetcode.com/problems/spiral-matrix-ii/
// Language: javascript
// Runtime: 78 ms
// Memory: 43 MB
// Submitted: 2023-07-20

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let grid = Array.from({length:n}, ()=> new Array())
      const matrixOutOfBounds = (r, c, m, n) => r < 0 || c < 0 || r >= m || c >= n;

    let cc=1
let sides = [
    [0, 1], //    E
    [1, 0], //    S
    [0, -1], //   W
    [-1, 0], //   N
  ];
    let i=0, j=-1
    let k=0
    while(cc<=n*n){
        let [x,y] = sides[k%4]
        
        if(!matrixOutOfBounds(i+x, j+y, n, n) && !grid[i+x][j+y]){
            i+=x
            j+=y
            grid[i][j] = cc++
        } else {
            k++
        }
        
        
    }
    
    return grid
};
