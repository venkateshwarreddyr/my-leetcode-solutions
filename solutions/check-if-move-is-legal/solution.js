// Problem: Check if Move is Legal
// LeetCode: https://leetcode.com/problems/check-if-move-is-legal/
// Language: javascript
// Runtime: 112 ms
// Memory: 44.3 MB
// Submitted: 2021-08-07

/**
 * @param {character[][]} board
 * @param {number} rMove
 * @param {number} cMove
 * @param {character} color
 * @return {boolean}
 */
var checkMove = function(board, rMove, cMove, color) {
    const dfsMatrix = (grid, i, j, isWhite) => {
  sides = [
    [0, -1], //   W
    [-1, 0], //   N
    [0, 1], //    E
    [1, 0], //    S
    [-1,-1],
    [1,1],
    [-1,1],
    [1,-1]
  ];

  const matrixOutOfBounds = (r, c, m, n) => r < 0 || c < 0 || r >= m || c >= n;
      let stack = [];
      stack.push([i, j]);
      while (stack.length != 0) {
        let [ii, jj, k] = stack.pop();
    if(!k){
        grid[ii][jj] = color
        for (let [si, sj] of sides) {
          if (
            !matrixOutOfBounds(ii + si, jj + sj, grid.length, grid[0].length) && grid[ii + si][jj + sj]!="." && (grid[ii+si][jj+sj]===(color==='W'?'B':"W"))
          ) {
            stack.push([ii + si, jj + sj, [si, sj]]);
          }
        }
    }else{
        let [si, sj] = k;
        // console.log({si, sj}, JSON.stringify(stack));
        // if(si>0)si++
        // else if(si<0) si--
        // if(sj>0)si++
        // else if(sj<0) si--

        console.log(ii+si, jj+sj, {ii,jj,si,sj, k})
        while(!matrixOutOfBounds(ii+si, jj+sj, grid.length, grid[0].length) && grid[ii+si][jj+sj]!="." && (grid[ii+si][jj+sj]===(color==='W'?'B':"W"))){
            console.log(grid[ii+si][jj+sj], [ii+si], [jj+sj], {ii,jj,si,sj})
        
        if(si>0)si++
        else if(si<0) si--
        if(sj>0)sj++
        else if(sj<0) sj--
        }
if(!matrixOutOfBounds(ii+si, jj+sj, grid.length, grid[0].length)&&grid[ii+si][jj+sj] === color) return true;
        
        
    }
      }
        return false;
};
return dfsMatrix(board, rMove, cMove, color==="W")
};
