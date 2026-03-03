// Problem: Task Scheduler
// LeetCode: https://leetcode.com/problems/task-scheduler/
// Language: javascript
// Runtime: 692 ms
// Memory: 65.2 MB
// Submitted: 2025-10-21

var leastInterval = function (tasks, n) {
    if (!tasks.length) return 0;

    let freq = {};
    let nextAvailableTimes = {};
    for (let i = 0; i < tasks.length; i++) {
        freq[tasks[i]] = (freq[tasks[i]] ?? 0) + 1;
        nextAvailableTimes[tasks[i]] = (nextAvailableTimes[tasks[i]] ?? 0)
    }

    let time;
    let taskKeys = Object.keys(freq);
    for (time = 0; taskKeys.length; time++) {
        taskKeys.sort((a, b) => freq[b] - freq[a]);
        for (let j = 0; j < taskKeys.length; j++) {
            let highestFreqTaskKey = taskKeys[j]
            if (nextAvailableTimes[highestFreqTaskKey] <= time) {
                nextAvailableTimes[highestFreqTaskKey] = time + n + 1;
                freq[highestFreqTaskKey]--;
                if (freq[highestFreqTaskKey] === 0) {
                    delete freq[highestFreqTaskKey];
                    delete nextAvailableTimes[highestFreqTaskKey];
                    taskKeys.splice(j, 1);
                }
                break;
            }
        }
    }
    return time;
};

