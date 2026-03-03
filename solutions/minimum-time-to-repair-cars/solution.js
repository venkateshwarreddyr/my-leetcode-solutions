// Problem: Minimum Time to Repair Cars
// LeetCode: https://leetcode.com/problems/minimum-time-to-repair-cars/
// Language: javascript
// Runtime: 19 ms
// Memory: 62.2 MB
// Submitted: 2025-11-29



function repairCars(ranks, cars) {
	const canRepair = time => {
		let total = 0;
		for (let r of ranks) {
			total += Math.floor(Math.sqrt(time / r));
			if (total >= cars) return true;
		}
		return false;
	};

	let left = 1,
		right = Math.max(...ranks) * cars * cars;
	while (left < right) {
		const mid = Math.floor((left + right) / 2);
		if (canRepair(mid)) right = mid;
		else left = mid + 1;
	}
	return left;
}
