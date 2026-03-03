// Problem: Construct Quad Tree
// LeetCode: https://leetcode.com/problems/construct-quad-tree/
// Language: javascript
// Runtime: 75 ms
// Memory: 49.3 MB
// Submitted: 2023-09-13

/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */
// cl = console.log
/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function (grid) {
    let n = grid.length;
    let set = new Set()
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            set.add(grid[i][j])
        }
    }

    if (set.size === 1) {
        return new Node(grid[0][0], 1)
    }
    let half = n / 2
    function getGrid(si, sj) {
        let x = sj
        let newgrid = Array.from({ length: half }, () => new Array(half))
        for (let i = 0; i < half; i++, si++) {
            for (let j = 0; j < half; j++, sj++) {
                newgrid[i][j] = grid[si][sj]
            }
            sj = x
        }
        // cl({ newgrid, grid, n, half })
        return newgrid
    }

    let node = new Node(
        1,
        0,
        construct(getGrid(0, 0)),
        construct(getGrid(0, half)),
        construct(getGrid(half, 0)),
        construct(getGrid(half, half)),
    )
    return node
};
