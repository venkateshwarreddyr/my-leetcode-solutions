// Problem: Maximum Candies You Can Get from Boxes
// LeetCode: https://leetcode.com/problems/maximum-candies-you-can-get-from-boxes/
// Language: javascript
// Runtime: 69 ms
// Memory: 50.6 MB
// Submitted: 2023-08-25

/**
 * @param {number[]} status
 * @param {number[]} candies
 * @param {number[][]} keys
 * @param {number[][]} containedBoxes
 * @param {number[]} initialBoxes
 * @return {number}
 */
var maxCandies = function (status, candies, keys, containedBoxes, initialBoxes) {
    let n = status.length
    let q = initialBoxes
    let vis_second = new Array(n).fill(0)
    let vis = new Array(n).fill(0)
    let an = 0
    while (q.length) {
        let u = q.shift()

        if (status[u]) {
            for (let v of keys[u]) {
                status[v] = 1
            }
            an += candies[u]
            vis[u] = 1
            for (let v of containedBoxes[u]) {
                if (!vis[v]) {
                    q.push(v)
                    vis[v] = 1
                }
            }
        } else {
            if (!vis_second[u]) {
                vis_second[u]++
                q.push(u)
            }
        }
    }

    return an
};
/**

7+5+4

 */
