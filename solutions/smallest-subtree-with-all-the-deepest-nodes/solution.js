// Problem: Smallest Subtree with all the Deepest Nodes
// LeetCode: https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/
// Language: javascript
// Runtime: 81 ms
// Memory: 45 MB
// Submitted: 2023-06-26

var subtreeWithAllDeepest = function (r) {
    let setmaxd = new Set() // deepest leaf nodes
    let maxd = -Infinity

    function he(r, d) {
        if (!r) return
        if (d > maxd) {
            maxd = d
            setmaxd.clear()
            setmaxd.add(r)
        } else if (d === maxd) {
            setmaxd.add(r)
        }

        he(r.left, d + 1)
        he(r.right, d + 1)
    }
    he(r, 0)

    function lca(r) {
        if (!r) return

        if (setmaxd.has(r)) return r

        let ll = lca(r.left)
        let rr = lca(r.right)
        return (ll && rr) ? r : (ll || rr)
    }
    return lca(r)
};

