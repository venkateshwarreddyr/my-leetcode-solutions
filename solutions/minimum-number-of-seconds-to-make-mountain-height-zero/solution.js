// Problem: Minimum Number of Seconds to Make Mountain Height Zero
// LeetCode: https://leetcode.com/problems/minimum-number-of-seconds-to-make-mountain-height-zero/
// Language: javascript
// Runtime: 13 ms
// Memory: 60 MB
// Submitted: 2026-01-08

// work is 1 unit of height
var minNumberOfSeconds = function (mountainUnitsOfWork, workerTimesPerUnit) {
	function getTimeTakenByFastestWorkerToDoAllWork(workerTimesPerUnit) {
		// what is the min time for any worker to complete whole mountain work units?
		let wtMin = Math.min(...workerTimesPerUnit);
		// time = wt + 2*wt + 3*wt + … + x*wt = wt × (1 + 2 + … + x) = wt × x×(x+1)/2
		return (wtMin * mountainUnitsOfWork * (mountainUnitsOfWork + 1)) / 2;
	}

	function getWorkDoneByThisWorkerInGivenTime(wt, targetTime) {
		// how much work (w) this worker with wt can complete in mid/targetTime time
		//  w (w + 1)/2 * wt  <= targetTime
		//  w (w + 1)         <= (2*targetTime)/wt
		//  w (w + 1)         -  (2*targetTime)/wt <= 0
		//  w^2 + w          -  (2*targetTime)/wt <= 0
		// 1w^2 + 1w       -  (2*targetTime)/wt <= 0
		// ax^2 + bx       +  c = 0
		const scaledWork = (2 * targetTime) / wt;
		if (scaledWork <= 0) return 0;
		//   D = b^2 − 4ac
		// 	 x = (-b   +/-  sqrt(b^2 − 4ac)  ) / 2a
		const maxUnits = Math.floor((-1 + Math.sqrt(1 + 4 * scaledWork)) / 2);
		return maxUnits;
	}

	function getTotalWorkDoneByAllWorkerInGivenTime(targetTime) {
		// all workers will work for mid/targetTime time - can they complete mountain work
		let totalWorkDone = 0;

		for (const wt of workerTimesPerUnit) {
			let unitsOfWorkDone = getWorkDoneByThisWorkerInGivenTime(wt, targetTime);
			totalWorkDone += unitsOfWorkDone;
			if (totalWorkDone >= mountainUnitsOfWork) return true; // early stop
		}
		return false;
	}

	let fastestWorkerTimeToDoAllWork = getTimeTakenByFastestWorkerToDoAllWork(workerTimesPerUnit);

	let lo = 0;
	let hi = fastestWorkerTimeToDoAllWork;

	while (lo < hi) {
		const mid = lo + Math.floor((hi - lo) / 2);
		// all workers will work for mid time
		if (getTotalWorkDoneByAllWorkerInGivenTime(mid)) {
			hi = mid;
		} else {
			lo = mid + 1;
		}
	}
	return hi;
};

