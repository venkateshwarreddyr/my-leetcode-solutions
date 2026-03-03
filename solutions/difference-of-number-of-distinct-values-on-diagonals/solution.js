// Problem: Difference of Number of Distinct Values on Diagonals
// LeetCode: https://leetcode.com/problems/difference-of-number-of-distinct-values-on-diagonals/
// Language: javascript
// Runtime: 142 ms
// Memory: 50.7 MB
// Submitted: 2023-05-28

cl = console.log
var differenceOfDistinctValues = function(grid) {
    let m = grid.length;
    let n= grid[0].length;
      sides = [
    [0, -1], //   W
    [-1, 0], //   N
    [0, 1], //    E
    [1, 0], //    S
  ];
    let newGrid = [...new Array(m)].map(e => new Array(n))
  const matrixOutOfBounds = (r, c, m, n) => r < 0 || c < 0 || r >= m || c >= n;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
        let setLeft = new Set();
        let setRight = new Set();
        
        let k=1
        while(!matrixOutOfBounds(i-k, j-k,m,n)){
            setLeft.add(grid[i-k][j-k])
            k++
        }
        
        k=1
        while(!matrixOutOfBounds(i+k, j+k,m,n)){
            setRight.add(grid[i+k][j+k])
            k++
        }
        
        newGrid[i][j] = Math.abs(setLeft.size - setRight.size)
     }
  }
    
    return newGrid;
};
