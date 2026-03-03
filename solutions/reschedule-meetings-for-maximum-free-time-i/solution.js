// Problem: Reschedule Meetings for Maximum Free Time I
// LeetCode: https://leetcode.com/problems/reschedule-meetings-for-maximum-free-time-i/
// Language: javascript
// Runtime: 2 ms
// Memory: 76 MB
// Submitted: 2026-01-12

const maxFreeTime = (eventTime, k, startTimes, endTimes) => {
	const n = startTimes.length; // meeting Count
	const freeGaps = [];

	// Free time before the first meeting
	freeGaps.push(startTimes[0]);

	// Free time between meetings
	for (let i = 1; i < n; i++) {
		freeGaps.push(startTimes[i] - endTimes[i - 1]);
	}

	// Free time after the last meeting
	freeGaps.push(eventTime - endTimes[n - 1]);

	let maxFreeTime = 0;
	let currentKWindowSum = 0;

	// Sliding window over at most (k + 1) gaps
	for (let i = 0; i < freeGaps.length; i++) {
		currentKWindowSum += freeGaps[i];

		if (i >= k) {
			maxFreeTime = Math.max(maxFreeTime, currentKWindowSum);
			currentKWindowSum -= freeGaps[i - k];
		}
	}

	return maxFreeTime;
};

