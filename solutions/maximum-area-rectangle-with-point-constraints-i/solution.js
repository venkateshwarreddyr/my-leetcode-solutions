// Problem: Maximum Area Rectangle With Point Constraints I
// LeetCode: https://leetcode.com/problems/maximum-area-rectangle-with-point-constraints-i/
// Language: javascript
// Runtime: 12 ms
// Memory: 61.6 MB
// Submitted: 2026-01-10

const maxRectangleArea = (points) => {
    const pointSet = new Set(points.map(([x, y]) => `${x},${y}`));
    let maxArea = -1;
 
    for (let i = 0; i < points.length; i++) {
        const [xA, yA] = points[i];
 
        for (let j = i + 1; j < points.length; j++) {
            const [xB, yB] = points[j];
 
            // Must be diagonal points
            if (xA === xB || yA === yB) continue;
 
            const corner1 = `${xA},${yB}`;
            const corner2 = `${xB},${yA}`;
            if (!pointSet.has(corner1) || !pointSet.has(corner2)) continue;
 
            const minX = Math.min(xA, xB);
            const maxX = Math.max(xA, xB);
            const minY = Math.min(yA, yB);
            const maxY = Math.max(yA, yB);
 
            let pointsInside = 0;
            for (const [x, y] of points) {
                if (x >= minX && x <= maxX && y >= minY && y <= maxY) {
                    pointsInside++;
                }
            }
 
            if (pointsInside === 4) {
                const area = (maxX - minX) * (maxY - minY);
                maxArea = Math.max(maxArea, area);
            }
        }
    }
 
    return maxArea;
};
