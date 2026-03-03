// Problem: Height of Binary Tree After Subtree Removal Queries
// LeetCode: https://leetcode.com/problems/height-of-binary-tree-after-subtree-removal-queries/
// Language: javascript
// Runtime: 252 ms
// Memory: 117.5 MB
// Submitted: 2025-10-19

var treeQueries = function (root, queries) {
	const depth = {};
	const height = {};
	function computeAllDepthHeights(node, d) {
		if (!node) return -1;
		depth[node.val] = d;
		const leftHeight = computeAllDepthHeights(node.left, d + 1);
		const rightHeight = computeAllDepthHeights(node.right, d + 1);
		const myH = 1 + Math.max(leftHeight, rightHeight);
		return (height[node.val] = myH);
	}
	computeAllDepthHeights(root, 0);

	const heightOfTreeWithoutSubtreeAt = {};
	function computeHeightOfTreeWithouts(node, maxHeightAboveAndWithoutMe) {
		if (!node) return;
		heightOfTreeWithoutSubtreeAt[node.val] = maxHeightAboveAndWithoutMe;

		const d = depth[node.val];
		const leftHeight = node.left ? height[node.left.val] : -1;
		const rightHeight = node.right ? height[node.right.val] : -1;

		const heightWithoutLeft = Math.max(maxHeightAboveAndWithoutMe, d + 1 + rightHeight);
		computeHeightOfTreeWithouts(node.left, heightWithoutLeft);

		const heightWithoutRight = Math.max(maxHeightAboveAndWithoutMe, d + 1 + leftHeight);
		computeHeightOfTreeWithouts(node.right, heightWithoutRight);
	}
	computeHeightOfTreeWithouts(root, 0);

	return queries.map(nodeVal => heightOfTreeWithoutSubtreeAt[nodeVal]);
};

