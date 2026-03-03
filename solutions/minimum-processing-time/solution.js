// Problem: Minimum Processing Time
// LeetCode: https://leetcode.com/problems/minimum-processing-time/
// Language: javascript
// Runtime: 166 ms
// Memory: 56.3 MB
// Submitted: 2023-10-09

cl = console.log
/**
 * @param {number[]} processorTime
 * @param {number[]} tasks
 * @return {number}
 */
var minProcessingTime = function(processorTime, tasks) {
    tasks.sort((a, b) => a-b)
    processorTime.sort((a, b) => a-b)
    let time = 0
    let max = 0
    for(let p of processorTime){
        let x = 4
        while(x--){
          max=  Math.max(max, p+tasks.pop())
        }
    }
    
    return max
};
