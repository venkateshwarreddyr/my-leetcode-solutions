// Problem: House Robber III
// LeetCode: https://leetcode.com/problems/house-robber-iii/
// Language: javascript
// Runtime: 4 ms
// Memory: 60.1 MB
// Submitted: 2025-12-31

var rob = function (root) {
    let memo = new Map();

    function dfs(tn, parentIsRobbed) {
        if (!tn) return 0;
        if (memo.get(tn)?.has(parentIsRobbed)) {
            return memo.get(tn).get(parentIsRobbed);
        }

        let res
        if (parentIsRobbed) {
            // CAN'T ROB current
            res =
                0 + // DONT ROB current
                dfs(tn.left, false) +
                dfs(tn.right, false);
        } else {
            // *MAY* ROB current
            let res1 =
                tn.val + // ROB current
                dfs(tn.left, true) +
                dfs(tn.right, true);
            let res2 =
                0 + // DONT ROB current
                dfs(tn.left, false) +
                dfs(tn.right, false);
            res = Math.max(res1, res2)
        }

        if (!memo.has(tn)) memo.set(tn, new Map());
        memo.get(tn).set(parentIsRobbed, res);
        return res;
    }

    return dfs(root, false);
};
