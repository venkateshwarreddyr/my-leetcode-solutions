// Problem: Reverse Nodes in Even Length Groups
// LeetCode: https://leetcode.com/problems/reverse-nodes-in-even-length-groups/
// Language: javascript
// Runtime: 93 ms
// Memory: 97 MB
// Submitted: 2025-10-30

var reverseEvenLengthGroups = function (head) {

    let groupSize = 1
    for (let curr = head; curr !== null;) {
        let a = []
        let temp = curr
        for (let i = 0; i < groupSize && temp !== null; i++, temp = temp.next) {
            a.push(temp.val)
        }
        if (a.length % 2 === 0) {
            while(a.length) {
                curr.val = a.pop()
                curr = curr.next
            }
        } else {
            curr = temp
        }
        groupSize++
    }

    return head
};
