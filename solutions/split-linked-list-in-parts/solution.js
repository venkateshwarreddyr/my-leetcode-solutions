// Problem: Split Linked List in Parts
// LeetCode: https://leetcode.com/problems/split-linked-list-in-parts/
// Language: javascript
// Runtime: 0 ms
// Memory: 57.4 MB
// Submitted: 2025-10-15

class LinkedListt {
    constructor() { }
    getLength(l1) {
        let length = 0;
        let temp = l1;
        while (temp) {
            length++;
            temp = temp.next;
        }
        return length;
    }
    getArray() {
        let A = [];
        let temp = l1;
        while (temp) {
            A.push(temp.val);
            temp = temp.next;
        }
        return A;
    }
}

var splitListToParts = function (root, k) {
    let ll = new LinkedListt();
    let N = ll.getLength(root);

    let each = Math.trunc(N / k);
    let extra = N % k;

    // console.log(N, k, "  ", each, extra);

    let ans = new Array(k);
    let i = 0;

    let temp = root;
    while (temp) {
        // console.log(temp.val);

        ans[i] = temp;
        let prev = null;
        let temp_small = temp;

        let e = each;
        while (e && temp_small) {
            prev = temp_small;
            temp_small = temp_small.next;
            e--;
        }
        if (extra && temp_small) {
            prev = temp_small;
            temp_small = temp_small.next;
            extra--;
        }

        if (prev) {
            prev.next = null;
        }

        temp = temp_small;
        i++;
    }
    for (; i < ans.length; i++) {
        ans[i] = null;
    }

    return ans;
};
