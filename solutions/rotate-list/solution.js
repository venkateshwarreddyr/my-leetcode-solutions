// Problem: Rotate List
// LeetCode: https://leetcode.com/problems/rotate-list/
// Language: javascript
// Runtime: 1 ms
// Memory: 56.3 MB
// Submitted: 2025-10-30

const getRotateRightIndexInCircularList = (i, k, n) => {
    return (n - k + i) % n
}
var rotateRight = function (head, k) {
    let vals = [];
    let t = head;
    while (t) {
        vals.push(t.val);
        t = t.next;
    }
    let n = vals.length
    k = k % n

    t = head;
    let i = 0
    while (t) {
        let j = getRotateRightIndexInCircularList(i, k, n)
        t.val = vals[j]
        t = t.next;
        i++
    }

    return head
};

