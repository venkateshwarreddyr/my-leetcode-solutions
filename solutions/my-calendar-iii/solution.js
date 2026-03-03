// Problem: My Calendar III
// LeetCode: https://leetcode.com/problems/my-calendar-iii/
// Language: javascript
// Runtime: 976 ms
// Memory: 71.9 MB
// Submitted: 2026-01-19

var MyCalendarThree = function () {
	let bookingCounts = {};

	this.book = function (start, end) {
		bookingCounts[start] = bookingCounts[start] || 0;
		bookingCounts[start] += 1;
		bookingCounts[end] = bookingCounts[end] || 0;
		bookingCounts[end] -= 1;

		let maxBookingCountAtEndpoint = 0;
		let bookingCountAtEndpoint = 0;
		for (let endpoint in bookingCounts) {
			bookingCountAtEndpoint += bookingCounts[endpoint];
			maxBookingCountAtEndpoint = Math.max(maxBookingCountAtEndpoint, bookingCountAtEndpoint);
		}
		return maxBookingCountAtEndpoint;
	};
};

