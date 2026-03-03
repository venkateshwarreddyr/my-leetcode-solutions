// Problem: Find the Safest Path in a Grid
// LeetCode: https://leetcode.com/problems/find-the-safest-path-in-a-grid/
// Language: javascript
// Runtime: 5189 ms
// Memory: 115.3 MB
// Submitted: 2023-08-06

cl = console.log


var maximumSafenessFactor = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  let sides = [
    [-1, 0], //   N
    [0, -1], //   W
    [0, 1], //    E
    [1, 0], //    S
  ];
  const matrixOutOfBounds = (r, c, m, n) =>
    r < 0 || c < 0 || r >= m || c >= n;
  const dfsMatrix = (grid) => {
    let m = grid.length;
    let n = grid[0].length;

    let c = 0;


    let newgrid = new Array(n).fill().map((e) => new Array(n).fill(0));

    for (let gi = 0; gi < m; gi++) {
      for (let gj = 0; gj < n; gj++) {
        if (grid[gi][gj] === 1) {
          let vis = new Array(n).fill().map((e) => new Array(n).fill(0));
          const dfs = (i, j) => {
            if (i < 0 || j < 0 || i >= m || j >= n || vis[i][j]) return;
            let manhat = Math.abs(gi - i) + Math.abs(gj - j)
            // cl({ gi, gj, i, j }, newgrid[i][j], manhat)
            if (newgrid[i][j] < manhat && newgrid[i][j]!==0) {
              return
            }
            vis[i][j] = 1

            newgrid[i][j] = Math.min(newgrid[i][j] || Infinity, manhat || 1)
            // cl({manhat, i, j, gi, gj})

            dfs(i - 1, j);
            dfs(i + 1, j);
            dfs(i, j - 1);
            dfs(i, j + 1);
          };
          dfs(gi, gj)
        }
      }
    }
    for (let gi = 0; gi < m; gi++) {
      for (let gj = 0; gj < n; gj++) {
        if (grid[gi][gj] === 1) {
          newgrid[gi][gj] = 0
        }
      }
    }

    return newgrid
  };
  grid = dfsMatrix(grid)
  cl(grid)
  function dijkstraWrapper() {
    function Pair(x, y, psf, wsf) {
      this.x = x;
      this.y = y;
      this.psf = psf;
      this.wsf = wsf;
    }
    let min = Infinity
    function dijkstra(x, y) {
      const { PriorityQueue } = require("@datastructures-js/priority-queue");
      const pq = new PriorityQueue({ compare: (a, b) => b.wsf - a.wsf }); // decreasing
      pq.enqueue(new Pair(x, y, x + "," + y, grid[x][y]));
      let vis = new Array(n).fill().map((e) => new Array(n).fill(0));
      while (!pq.isEmpty()) {
        let p = pq.dequeue();
        let [x, y, psf, wsf] = [p.x, p.y, p.psf, p.wsf];
        min = Math.min(min, wsf)
        vis[x][y] = 1
        if (x === n - 1 && y === n - 1) return min
        for (let [si, sj] of sides) {
          if (!matrixOutOfBounds(x + si, y + sj, m, n) && !vis[x + si][y + sj]) {
            pq.enqueue(new Pair(x + si, y + sj, "", grid[x + si][y + sj]));
            vis[x + si][y + sj] = 1
          }
        }
      }
    }

    dijkstra(0, 0);
    // cl(g, distance)

    return min;
  }

  return dijkstraWrapper()
};

/**
[ 3, 2, 1, 0 ], 
[ 4, 3, 2, 1 ], 
[ 5, 4, 3, 2 ], 
[ 0, 5, 4, 3 ]

*/
