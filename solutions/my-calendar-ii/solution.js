// Problem: My Calendar II
// LeetCode: https://leetcode.com/problems/my-calendar-ii/
// Language: javascript
// Runtime: 105 ms
// Memory: 67.6 MB
// Submitted: 2025-11-20


var MyCalendarTwo = function () {
    let book = []
    let overlaps = []
    MyCalendarTwo.prototype.book = function (startTime, endTime) {

        for (let [s, e] of overlaps) {
            if (Math.max(s, startTime) < Math.min(e, endTime)) {
                return false
            }
        }

        for (let [s, e] of book) {
            if (Math.max(s, startTime) < Math.min(e, endTime)) {
                overlaps.push([Math.max(s, startTime), Math.min(e, endTime)])
            }
        }


        book.push([startTime, endTime])

        return true
    };

};

