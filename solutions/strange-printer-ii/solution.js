// Problem: Strange Printer II
// LeetCode: https://leetcode.com/problems/strange-printer-ii/
// Language: javascript
// Runtime: 458 ms
// Memory: 62.1 MB
// Submitted: 2023-08-29

cl = console.log

var isPrintable = function (grid) {
    const adjacentColors = new Array(65).fill(null).map(() => [])
    const degree = new Array(65).fill(0)

    // Calculate adjacent colors for each color
    for (let color = 1; color <= 60; color++) {
        let maxX = 0
        let minX = 60
        let maxY = 0
        let minY = 60

        // Find the boundaries for the current color
        for (let R = 0; R < grid.length; R++) {
            for (let C = 0; C < grid[0].length; C++) {
                if (grid[R][C] === color) {
                    maxX = Math.max(maxX, R)
                    minX = Math.min(minX, R)
                    maxY = Math.max(maxY, C)
                    minY = Math.min(minY, C)
                }
            }
        }
        cl({
            maxX,
            minX,
            maxY,
            minY
        })
        // Collect adjacent colors within the boundaries
        for (let R = minX; R <= maxX; R++) {
            for (let C = minY; C <= maxY; C++) {
                if (grid[R][C] !== color) {
                    adjacentColors[color].push(grid[R][C])
                    degree[grid[R][C]]++
                }
            }
        }
    }

    cl(adjacentColors)
    cl(degree)
    const queue = []
    for (let color = 1; color <= 60; color++) {
        if (degree[color] === 0) {
            queue.push(color)
        }
    }

    cl(queue)
    let visitedCount = 0
    while (queue.length > 0) {
        const currentColor = queue.shift()
        visitedCount++

        // Update degrees and enqueue adjacent colors
        for (const adjColor of adjacentColors[currentColor]) {
            if (--degree[adjColor] === 0) {
                queue.push(adjColor)
            }
        }
        cl({ currentColor, degree })

    }

    return visitedCount === 60
}

/**
[[1,2,1],[2,1,2],[1,2,1]]
 */
