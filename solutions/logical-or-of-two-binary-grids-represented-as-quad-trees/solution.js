// Problem: Logical OR of Two Binary Grids Represented as Quad-Trees
// LeetCode: https://leetcode.com/problems/logical-or-of-two-binary-grids-represented-as-quad-trees/
// Language: javascript
// Runtime: 58 ms
// Memory: 61.3 MB
// Submitted: 2026-01-03

// _Node(val, isLeaf, topLeft, topRight, bottomLeft, bottomRight) {

function intersect(p, q) {
    if (p.isLeaf && q.isLeaf) return new Node(p.val || q.val, true, null, null, null, null);
    if (p.isLeaf) return p.val ? p : q;
    if (q.isLeaf) return q.val ? q : p;

    let tlRes = intersect(p.topLeft, q.topLeft);
    let trRes = intersect(p.topRight, q.topRight);
    let blRes = intersect(p.bottomLeft, q.bottomLeft);
    let brRes = intersect(p.bottomRight, q.bottomRight);

    // If all merged children became leaves with same value, merge all merged children and this one into one
    let allChildrenAreLeafs = tlRes.isLeaf && trRes.isLeaf && blRes.isLeaf && brRes.isLeaf;
    let allChildrenValEqual = tlRes.val === trRes.val && trRes.val === blRes.val && blRes.val === brRes.val;
    if (allChildrenAreLeafs && allChildrenValEqual) {
        return new Node(tlRes.val, true, null, null, null, null);
    }

    return new Node(false, false, tlRes, trRes, blRes, brRes);
}

