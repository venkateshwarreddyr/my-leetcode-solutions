// Problem: Find Maximum Area of a Triangle
// LeetCode: https://leetcode.com/problems/find-maximum-area-of-a-triangle/
// Language: javascript
// Runtime: 1263 ms
// Memory: 177.1 MB
// Submitted: 2026-01-09

function getMaxAreaForVerticalSide(coords) {
	let gobalMinX = Infinity;
	let gobalMaxX = -Infinity;
	const minYMap = {};
	const maxYMap = {};

	for (const [x, y] of coords) {
		gobalMinX = Math.min(gobalMinX, x);
		gobalMaxX = Math.max(gobalMaxX, x);
		minYMap[x] = Math.min(minYMap[x] ?? Infinity, y);
		maxYMap[x] = Math.max(maxYMap[x] ?? -Infinity, y);
	}

	let maxArea = 0;

	for (let x in minYMap) {
		x = +x;

		const base = maxYMap[x] - minYMap[x];
		// Farthest distance from x to any point
		const height = Math.max(x - gobalMinX, gobalMaxX - x);
		const area = base * height;

		maxArea = Math.max(maxArea, area);
	}

	return maxArea;
}

function swapXAndYCoordinates(coords) {
	return coords.map(coord => [...coord].reverse());
}

function maxArea(coords) {
	const areaWithVerticalSide = getMaxAreaForVerticalSide(coords);
	const swapped = swapXAndYCoordinates(coords);
	const areaWithHorizontalSide = getMaxAreaForVerticalSide(swapped);

	const maxArea = Math.max(areaWithVerticalSide, areaWithHorizontalSide);
	return maxArea > 0 ? maxArea : -1;
}

