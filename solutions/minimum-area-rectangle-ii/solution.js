// Problem: Minimum Area Rectangle II
// LeetCode: https://leetcode.com/problems/minimum-area-rectangle-ii/
// Language: javascript
// Runtime: 95 ms
// Memory: 73.2 MB
// Submitted: 2026-01-03

function minAreaFreeRect(points) {
    const n = points.length;

    function getDistance([x1, y1], [x2, y2]) {
        return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    }

    const map = {} // diagonalCenterAndLength To PointIndexMap

    for (let i = 0; i < n; i++) {
        let [x1, y1] = points[i];

        for (let j = i + 1; j < n; j++) {
            let [x2, y2] = points[j];

            const cx = (x1 + x2) / 2;
            const cy = (y1 + y2) / 2;
            const dist = getDistance([x1, y1], [x2, y2]);
            const key = `${cx},${cy},${dist}`;

            map[key] = map[key] ?? [];
            map[key].push([i, j]);
        }
    }

    let minArea = Infinity;

    for (const diagonalPairsInGroupArr of Object.values(map)) {
        const m = diagonalPairsInGroupArr.length;

        for (let a = 0; a < m; a++) {
            for (let b = a + 1; b < m; b++) {
                const [i, j, k, l] = [...diagonalPairsInGroupArr[a], ...diagonalPairsInGroupArr[b]];
                let [p1, p2, p3, p4] = [points[i], points[j], points[k], points[l]];

                const length = getDistance(p1, p3);
                const breadth = getDistance(p1, p4);
                const area = length * breadth;
                minArea = Math.min(minArea, area);
            }
        }
    }

    return minArea === Infinity ? 0 : minArea;
}

