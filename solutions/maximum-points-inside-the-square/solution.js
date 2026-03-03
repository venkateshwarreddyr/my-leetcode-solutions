// Problem: Maximum Points Inside the Square
// LeetCode: https://leetcode.com/problems/maximum-points-inside-the-square/
// Language: javascript
// Runtime: 310 ms
// Memory: 105.4 MB
// Submitted: 2024-05-11

/**
 * @param {number[][]} points
 * @param {string} s
 * @return {number}
 */
var maxPointsInsideSquare = function(points, s) {
const d1 = (x1, y1, x2, y2) => Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1)) // getDist2PointCoord

const d2 = (p1, p2) => d1(p1[0], p1[1], p2[0], p2[1]) // getDist2Points
    let distance = points.map(e => d2(e, [0, 0]))
      const { PriorityQueue } = require("@datastructures-js/priority-queue");
  const pq = new PriorityQueue({ compare: (a, b) => a[0] - b[0] }); // increasing
    
    let ob = {
        0: []
    }
    distance.forEach((e, i) => {
        ob[e] = ob[e] || []
        ob[e].push(s[i])
    })
    let vis = new Set()
    let sortedKeys = Object.keys(ob).map(e => +e).sort((a, b) => a - b)
    let an = 0
    for(let key of sortedKeys) {
        let thisvis = new Set()
        for(let char of ob[key]) {
            
            if(thisvis.has(char) || vis.has(char)) {
                return vis.size
            }
            thisvis.add(char)
            
        }
        vis = new Set([...vis, ...thisvis])
    }
    
    return vis.size
};
