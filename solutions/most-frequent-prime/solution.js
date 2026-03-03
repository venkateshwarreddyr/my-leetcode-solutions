// Problem: Most Frequent Prime
// LeetCode: https://leetcode.com/problems/most-frequent-prime/
// Language: javascript
// Runtime: 209 ms
// Memory: 59.9 MB
// Submitted: 2024-02-18

/**
 * @param {number[][]} mat
 * @return {number}
 */
var mostFrequentPrime = function(mat) {
    let ob = {}

    const dfsMatrix = (grid) => {
      let m = grid.length;
      let n = grid[0].length;

      let c = 0;
      let sides = [
        [-1, 0], //   N
        [0, -1], //   W
        [0, 1], //    E
        [1, 0], //    S
        [1, 1],
        [1, -1],
        [-1, 1],
        [-1, -1],
          
      ];
      const matrixOutOfBounds = (r, c, m, n) => r < 0 || c < 0 || r >= m || c >= n;
        
        const calculate = ([i, j], [si, sj]) => {
            let num = grid[i][j]

            while(!matrixOutOfBounds(i + si, j + sj, m, n)) {
                num = num * 10 + grid[i + si][j + sj]
                if(si>0) si++
                if(sj>0) sj++
                if(si<0) si--
                if(sj<0) sj--
                 ob[num] = ob[num] || 0
                ob[num]++

            }
        }
        
      for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
              for (let [si, sj] of sides) {
                calculate([i, j], [si, sj])
              }
//             let stack = [];
//             stack.push([i, j]);
//             let prev = null
//             while (stack.length != 0) {
//               let [ii, jj] = stack.pop();
//               if (grid[ii][jj] < 1) continue;

//               for (let [si, sj] of prev ? [prev] : sides) {
//                 if (!matrixOutOfBounds(ii + si, jj + sj, m, n)) {
//                   if (grid[ii + si][jj + sj] === 1) stack.push([ii + si, jj + sj]);
//                 } else {
                    
//                 }
//               }

//               grid[ii][jj] = -1;
//             }
        }
      }
    };
    
    dfsMatrix(mat)
    console.log(ob)
    
    function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
    let ans = -1, freq = 0
    for(let key in ob) {
        if(isPrime(+key)) {
            if(+key > ans && ob[key] >= freq) {
                ans = +key
                freq = ob[key]
            }
        }
    }
    
    return ans
};
