// Problem: Meeting Rooms III
// LeetCode: https://leetcode.com/problems/meeting-rooms-iii/
// Language: javascript
// Runtime: 262 ms
// Memory: 81.7 MB
// Submitted: 2024-05-04

/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function (n, meetings) {
    meetings = meetings.sort((a, b) => a[0] - b[0])

    let roomTime = new Array(n).fill(0)
    let  countRoomFreq = new Array(n).fill(0)

    for (let [startTime, endTime] of meetings) {
        let freeRoomIndex = roomTime.findIndex(time => time <= startTime)
        if (freeRoomIndex > -1) {
             countRoomFreq[freeRoomIndex]++
            roomTime[freeRoomIndex] = endTime
        } else {
            let min = Math.min(...roomTime)
            let freeRoomIndex = roomTime.indexOf(min)
             countRoomFreq[freeRoomIndex]++
            roomTime[freeRoomIndex] += (endTime - startTime)
        }
    }

    let max = Math.max(... countRoomFreq)
    return  countRoomFreq.indexOf(max)
};

