// Problem: Search a 2D Matrix
// LeetCode: https://leetcode.com/problems/search-a-2d-matrix/
// Language: javascript
// Runtime: 56 ms
// Memory: 44.1 MB
// Submitted: 2023-08-24

cl = console.log
var searchMatrix = function (grid, tar) {
    let m = grid.length;
    let n = grid[0].length;

    function upper_bound_g(arr, target, L = 0, R = arr.length) {
        while (L < R) {
            let mid = ~~(L / 2 + R / 2);

            arr[mid] <= target ? (L = mid + 1) : (R = mid);
        }

        return L;
    }

    function binary_search(arr, target, L = 0, R = arr.length - 1) {
        while (L < R) {
            let mid = ~~(L / 2 + R / 2);

            arr[mid] < target ? (L = mid + 1) : (R = mid);
        }

        return L === R && arr[L] === target ? L : -Infinity;
    }

    let a = []
    for (let i = 0; i < m; i++) {
        a.push(grid[i][0])
    }

    let idx = upper_bound_g(a, tar) - 1
    cl(grid[idx], idx)

    if (idx > -1) {
        let an = binary_search(grid[idx], tar)
        return an > -1
    }

    return false
};
