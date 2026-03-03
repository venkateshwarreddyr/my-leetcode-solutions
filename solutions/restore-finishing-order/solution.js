// Problem: Restore Finishing Order
// LeetCode: https://leetcode.com/problems/restore-finishing-order/
// Language: javascript
// Runtime: 2 ms
// Memory: 57.6 MB
// Submitted: 2025-10-12


var recoverOrder = function (order, fs) {
    let friendSet = new Set(fs)

    let res = []
    for (let participant of order) {
        if (friendSet.has(participant)) {
            res.push(participant)
        }
    }
    return res
};
