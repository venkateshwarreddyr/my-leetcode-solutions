// Problem: Minimum Moves to Capture The Queen
// LeetCode: https://leetcode.com/problems/minimum-moves-to-capture-the-queen/
// Language: javascript
// Runtime: 78 ms
// Memory: 47.3 MB
// Submitted: 2024-01-07

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} d
 * @param {number} e
 * @param {number} f
 * @return {number}
 */
var minMovesToCaptureTheQueen = function(a, b, c, d, e, f) {
    // a,b = "elephant"
    // c,d = "cammel"
    // e,f = queen
    /**
    
a 1 [0,0,0,0,0,0,0,0]
b 1 [0,0,0,0,0,0,0,0]
c 1 [0,0,0,r,0,0,0,0]
d 4 [0,0,b,0,0,0,0,0]
e 1 [0,q,0,0,0,0,0,0]
f 8 [0,0,0,0,0,0,0,0]
    [0,0,0,0,0,0,0,0]
    [0,0,0,0,0,0,0,0]

4
3
3
4
2
5
    */
    let moves = [[1, -1], [-1, 1], [1, 1], [-1, -1]]
    let queue = []
    
    queue.push([c, d])
    for(let i=0;i<8;i++ ) {
        let [c, d] = queue[queue.length-1]
        
        queue.push([c+1, d-1])
        let [x, y] = queue[queue.length-1]
        if(x === a && y === b) {
            break
        } else if(x === e && y === f) {
            return 1
        }
    }
        queue.push([c, d])
    for(let i=0;i<8;i++ ) {
        let [c, d] = queue[queue.length-1]
        queue.push([c-1, d+1])
         let [x, y] = queue[queue.length-1]
         if(x === a && y === b) {
            break
        } else if(x === e && y === f) {
            return 1
        }
    }
        queue.push([c, d])
    for(let i=0;i<8;i++ ) {
        let [c, d] = queue[queue.length-1]
        queue.push([c+1, d+1])
         let [x, y] = queue[queue.length-1]
         if(x === a && y === b) {
            break
        } else if(x === e && y === f) {
            return 1
        }
    }
        queue.push([c, d])
    for(let i=0;i<8;i++ ) {
        let [c, d] = queue[queue.length-1]
        queue.push([c-1, d-1])
         let [x, y] = queue[queue.length-1]
         if(x === a && y === b) {
            break
        } else if(x === e && y === f) {
            return 1
        }
    }

    
    if(a === e ) {
        if(c === e && d > Math.min(b, f) && d < Math.max(b, f)) {
            return 2
        }
        return 1
    }if(b === f) {
        if(d === f && c > Math.min(a, e) && c < Math.max(a, e)) {
            return 2
        }
        return 1
    } else {
        return 2
    }
    
};
