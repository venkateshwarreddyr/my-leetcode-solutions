// Problem: Rotate Image
// LeetCode: https://leetcode.com/problems/rotate-image/
// Language: javascript
// Runtime: 55 ms
// Memory: 42.4 MB
// Submitted: 2023-07-15

cl = console.log
var rotate = function (g) {
  let m = g.length
  let n = g[0].length
  function rotateRight90_rimStartingAt(rstart, cstart) {
    for (
      let r = rstart, c = cstart; //
      r < m - 1 - rstart && c < n - 1 - cstart; // one less here
      r++, c++
    ) {
      ;[
        g[rstart][c], //                    same row/rstart, c++ (top)
        g[m - 1 - rstart][n - 1 - c], //    same row, c-- (bottom)
        g[r][n - 1 - cstart], //            r++, same col (right)
        g[m - 1 - r][cstart], //            same col/cstart, r-- (left)
      ] = [
        g[m - 1 - r][cstart], //            same col/cstart, r-- (left)
        g[r][n - 1 - cstart], //            r++, same col (right)
        g[rstart][c], //                    same row/rstart, c++ (top)
        g[m - 1 - rstart][n - 1 - c], //    same row, c-- (bottom)
      ]
    }
  }

  // rotate all rims (outer to inner) until reaching mid of rect
  for (
    let rstart = 0, cstart = 0;
    rstart < Math.trunc(m / 2) && cstart < Math.trunc(n / 2);
    rstart++, cstart++
  ) {
    rotateRight90_rimStartingAt(rstart, cstart)
  }

  return g
}

/**

[
  [ 5, 1, 9, 11 ],
  [ 2, 4, 8, 10 ],
  [ 13, 3, 6, 7 ],
  [ 15, 14, 12, 16 ]
]
[
  [ 15, 1, 9, 5 ],
  [ 2, 4, 8, 10 ],
  [ 13, 3, 6, 7 ],
  [ 16, 14, 12, 11 ]
]
[
  [ 15, 13, 9, 5 ],
  [ 2, 4, 8, 1 ],
  [ 12, 3, 6, 7 ],
  [ 16, 14, 10, 11 ]
]
[
  [ 15, 13, 2, 5 ],
  [ 14, 4, 8, 1 ],
  [ 12, 3, 6, 9 ],
  [ 16, 7, 10, 11 ]
]
[
  [ 15, 13, 2, 5 ],
  [ 14, 3, 4, 1 ],
  [ 12, 6, 8, 9 ],
  [ 16, 7, 10, 11 ]
]


[ 
[ 1, 2, 3 ], 
[ 4, 5, 6 ], 
[ 7, 8, 9 ] 
]


[ 
[ 7, 2, 1 ], 
[ 4, 5, 6 ], 
[ 9, 8, 3 ] 
]


[ 
[ 7, 4, 1 ], 
[ 8, 5, 2 ], 
[ 9, 6, 3 ] 
]
 */
