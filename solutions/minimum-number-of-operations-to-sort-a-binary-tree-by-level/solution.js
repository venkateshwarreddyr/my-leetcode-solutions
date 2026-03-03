// Problem: Minimum Number of Operations to Sort a Binary Tree by Level
// LeetCode: https://leetcode.com/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level/
// Language: javascript
// Runtime: 254 ms
// Memory: 112.3 MB
// Submitted: 2023-07-28

cl = console.log

var minimumOperations = function (r) {

    function bfs(r) {
        let q = [r];
        let cc = 0

        while (q.length) {
            let nq = []
            for (let e of q) {
                if (e.left) nq.push(e.left)
                if (e.right) nq.push(e.right)
            }

            const ids = Array(q.length).fill(0).map((_, i) => i);
            let qe = q.map(e => e.val)
            ids.sort((i, j) => qe[i] - qe[j]);

            for (let i = 0; i < ids.length; ++i) {
                while (ids[i] !== i) {
                    const temp = ids[i];
                    ids[i] = ids[temp];
                    ids[temp] = temp;
                    ++cc;
                }
            }
            q = nq
        }

        return cc
    }
    return bfs(r)
};

/**
49,45,1,20,46,15,39,27,null,null,null,25
            49
        45      1
    20    46  15 39

 */
