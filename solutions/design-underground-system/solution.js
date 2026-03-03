// Problem: Design Underground System
// LeetCode: https://leetcode.com/problems/design-underground-system/
// Language: javascript
// Runtime: 240 ms
// Memory: 59.9 MB
// Submitted: 2023-07-26


var UndergroundSystem = function () {
    let getKey = (s, e) => s + "," + e

    let cust = {}
    let count = {}
    let sum = {}

    UndergroundSystem.prototype.checkIn = function (id, from, t1) {
        cust[id] = [from, t1]
    };


    UndergroundSystem.prototype.checkOut = function (id, to, t2) {
        let [from, t1] = cust[id]
        delete cust[id]

        let key = getKey(from, to)

        diff = t2 - t1

        sum[key] = (sum[key] || 0) + diff
        count[key] = (count[key] || 0) + 1
    };


    UndergroundSystem.prototype.getAverageTime = function (from, to) {
        let key = getKey(from, to)

        return sum[key] / count[key]
    };

};


