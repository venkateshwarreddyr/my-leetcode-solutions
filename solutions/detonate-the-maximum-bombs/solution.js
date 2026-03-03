// Problem: Detonate the Maximum Bombs
// LeetCode: https://leetcode.com/problems/detonate-the-maximum-bombs/
// Language: javascript
// Runtime: 687 ms
// Memory: 49.6 MB
// Submitted: 2023-06-20


var maximumDetonation = function (bombs) {
    let n = bombs.length;
    cl = console.log
    const distBetTwoPoints = ([x1, y1], [x2, y2]) => {
        let a = (x1 - x2)
        let b = (y1 - y2)
        return Math.sqrt(a * a + b * b)
    }
    let visited = new Set();

    function fn(i) {
        let [x1, y1, r1] = bombs[i]
        visited.add(i)
        for (let j = 0; j < n; j++) {
            if (!visited.has(j)) {
                let [x2, y2] = bombs[j]
                if (distBetTwoPoints([x1, y1], [x2, y2]) <= r1) {
                    fn(j)
                }
            }
        }
    }
    let max = -1
    for (let i = 0; i < n; i++) {
        fn(i)
        max = Math.max(max, visited.size)
        visited = new Set()
    }

    return max;
};
