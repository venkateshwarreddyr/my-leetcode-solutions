// Problem: Operations on Tree
// LeetCode: https://leetcode.com/problems/operations-on-tree/
// Language: javascript
// Runtime: 111 ms
// Memory: 68.9 MB
// Submitted: 2026-01-17

/**
 * @param {number[]} parent
 */
var LockingTree = function (parent) {
    const n = parent.length;
    this.parent = parent;
    this.locked = new Array(n).fill(-1);

    // build children list
    this.children = Array.from({ length: n }, () => []);
    for (let i = 1; i < n; i++) {
        this.children[parent[i]].push(i);
    }
};

LockingTree.prototype.lock = function (num, user) {
    if (this.locked[num] !== -1) return false;
    this.locked[num] = user;
    return true;
};

LockingTree.prototype.unlock = function (num, user) {
    if (this.locked[num] !== user) return false;
    this.locked[num] = -1;
    return true;
};

LockingTree.prototype.upgrade = function (num, user) {
    // node itself must be unlocked
    if (this.locked[num] !== -1) return false;

    // no locked ancestors
    let p = this.parent[num];
    while (p !== -1) {
        if (this.locked[p] !== -1) return false;
        p = this.parent[p];
    }

    // must have at least one locked descendant
    let found = false;
    const stack = [num];

    while (stack.length) {
        const u = stack.pop();
        for (const v of this.children[u]) {
            if (this.locked[v] !== -1) found = true;
            stack.push(v);
        }
    }
    if (!found) return false;

    // unlock all descendants
    stack.push(num);
    while (stack.length) {
        const u = stack.pop();
        for (const v of this.children[u]) {
            this.locked[v] = -1;
            stack.push(v);
        }
    }

    // lock current node
    this.locked[num] = user;
    return true;
};

