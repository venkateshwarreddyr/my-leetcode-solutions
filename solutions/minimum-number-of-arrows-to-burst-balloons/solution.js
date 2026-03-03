// Problem: Minimum Number of Arrows to Burst Balloons
// LeetCode: https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/
// Language: javascript
// Runtime: 101 ms
// Memory: 79.8 MB
// Submitted: 2025-12-06

/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
	if (points.length === 0) return 0;

	points.sort((a, b) => a[1] - b[1]);
	let arrows = 1;
	let end = points[0][1];

	for (let [start, finish] of points) {
		if (start > end) {
			arrows++;
			end = finish;
		}
	}

	return arrows;
};
/**
        _____________
            ___________
    ______   ___   _____

4-5
3-5
4-6

 */
