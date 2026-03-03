// Problem: Count Sub Islands
// LeetCode: https://leetcode.com/problems/count-sub-islands/
// Language: javascript
// Runtime: 216 ms
// Memory: 65.4 MB
// Submitted: 2021-06-25

/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
 var countSubIslands = function (grid1, grid2) {
    for (let i = 0; i < grid1.length; i++) {
      for (let j = 0; j < grid1[0].length; j++) {
        if (grid2[i][j] == 1 && grid1[i][j] === 1) grid2[i][j] = 2;
      }
    }
    let counter = 0;
    let getStr = (i, j) => [i,j];
    for (let i = 0; i < grid1.length; i++) {
      for (let j = 0; j < grid1[0].length; j++) {
        let stack = [];
          let remove = false;
        if (grid2[i][j] === 2) {
        // console.log()
          counter++;
          stack.push(getStr(i, j));
          while (stack.length != 0) {
            let [ii, jj] = stack
              .pop();
  
            // console.log({ ii, jj, stack });
          if(!(jj < grid1[0].length && ii < grid1.length && ii >= 0 && jj >= 0)){
              continue;
          }
            if ( grid2[ii][jj] === 2) {
              if (ii < grid1.length) stack.push(getStr(ii + 1, jj));
              if (jj < grid1[0].length) stack.push(getStr(ii, jj + 1));
              if (ii > 0) stack.push(getStr(ii - 1, jj));
              if (jj > 0) stack.push(getStr(ii, jj - 1));
              grid2[ii][jj] = 10;
            } else if (grid2[ii][jj] === 1) {
              remove = true
            }
          }
          // console.log({grid2})
        }
          if(remove) counter--
      }
    }
    return counter;
  };
  
