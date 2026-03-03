// Problem: Max Area of Island
// LeetCode: https://leetcode.com/problems/max-area-of-island/
// Language: javascript
// Runtime: 87 ms
// Memory: 44.8 MB
// Submitted: 2023-07-15

var maxAreaOfIsland = function (M) {
    const m = M.length;
    const n = M[0].length;
    let V = Array.from({ length: m }, () => new Array(n).fill(0)); //visited

    const areaOf = (r, c) => {
        if (
            r < 0 || r > m - 1 || c < 0 || c > n - 1 ||
            M[r][c] == 0 || V[r][c]
        )
            return 0; //                  out of bounds,  water,  visited

        V[r][c] = 1; //                   mark visited

        return (
            1 + //                        this + sourrounding(below)
            areaOf(r, c - 1) + //     left
            areaOf(r, c + 1) + //     right
            areaOf(r - 1, c) + //     top
            areaOf(r + 1, c) //       bottom
        );
    };

    let maxArea = 0;
    for (let r = 0; r < m; r++)
        for (let c = 0; c < n; c++)
            if (M[r][c] === 1) maxArea = Math.max(maxArea, areaOf(r, c));
    return maxArea;
}
