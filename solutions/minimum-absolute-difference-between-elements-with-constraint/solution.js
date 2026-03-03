// Problem: Minimum Absolute Difference Between Elements With Constraint
// LeetCode: https://leetcode.com/problems/minimum-absolute-difference-between-elements-with-constraint/
// Language: javascript
// Runtime: 584 ms
// Memory: 99.9 MB
// Submitted: 2023-08-13

cl = console.log
class Node {
    constructor(key) {
        this.left = null;
        this.right = null;
        this.val = key;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(key) {
        const newNode = new Node(key);

        if (this.root === null) {
            this.root = newNode;
            return;
        }

        let current = this.root;
        while (true) {
            if (key < current.val) {
                if (current.left === null) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }

    search(key) {
        let current = this.root;
        let min = Infinity
        while (current !== null) {
            min = Math.min(min, Math.abs(current.val - key))
            if (key === current.val) {
                return min
            } else if (key < current.val) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        return min;
    }
    inorderTraversal() {
        const stack = [];
        let current = this.root;
        const result = [];

        while (current !== null || stack.length > 0) {
            while (current !== null) {
                stack.push(current);
                current = current.left;
            }

            current = stack.pop();
            result.push(current.val);
            current = current.right;
        }

        return result;
    }
    balance() {
        const sortedKeys = this.inorderTraversal(this.root);
        this.root = this.buildBalancedTree(sortedKeys, 0, sortedKeys.length - 1);
    }

    buildBalancedTree(keys, start, end) {
        if (start > end) {
            return null;
        }

        const mid = Math.floor((start + end) / 2);
        const newNode = new Node(keys[mid]);

        newNode.left = this.buildBalancedTree(keys, start, mid - 1);
        newNode.right = this.buildBalancedTree(keys, mid + 1, end);

        return newNode;
    }
}

var minAbsoluteDifference = function (a, x) {
    if (x === 0) return 0
    let bst = new BST()
    let n = a.length
    let an = []
    let set = new Set()
    for (let i = x; i < n; i++) {
        bst.insert(a[i - x])
        if (i % 2000 === 0)
            bst.balance()
        an.push(bst.search(a[i]))
    }

    return Math.min(...an)
};
