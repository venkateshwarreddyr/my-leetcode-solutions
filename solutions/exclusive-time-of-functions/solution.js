// Problem: Exclusive Time of Functions
// LeetCode: https://leetcode.com/problems/exclusive-time-of-functions/
// Language: javascript
// Runtime: 26 ms
// Memory: 65.6 MB
// Submitted: 2025-11-19

var exclusiveTime = function (n, logs) {
    let stack = []
    let result = new Array(n).fill(0)
    
    for (let log of logs) {
        if (log.includes(':start:')) {
            const [startFun, startTime] = log.split(':start:').map(e => +e)

            stack.push([startFun, startTime])
        } else {
            const [endFun, endTime] = log.split(':end:').map(e => +e)
            const [_, startTime] = stack.pop()
            
            const duration = endTime - startTime + 1
            result[endFun] += duration

            if (stack.length > 0) {
                result[stack.at(-1)[0]] -= duration
            }
        }
    }

    return result
};
