// Problem: My Calendar I
// LeetCode: https://leetcode.com/problems/my-calendar-i/
// Language: javascript
// Runtime: 238 ms
// Memory: 50 MB
// Submitted: 2023-07-22

function overlap(s1, e1, s2, e2) {
    let o =
        (s1 <= s2 && s2 <= e1) || //    s1 s2 e1
        (s1 <= e2 && e2 <= e1) || //    s1 e2 e1
        (s2 <= s1 && e1 <= e2) // s2 s1    e1  e2
    return o
}
var MyCalendar = function () {
    let bookings = []

    MyCalendar.prototype.book = function (s2, e2) {
        e2-- // now we can include e2

        for (let [s1, e1] of bookings) {
            if (overlap(s1, e1, s2, e2)) return false
        }

        bookings.push([s2, e2])
        return true
    }
}
