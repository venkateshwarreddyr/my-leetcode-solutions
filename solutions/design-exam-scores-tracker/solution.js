// Problem: Design Exam Scores Tracker
// LeetCode: https://leetcode.com/problems/design-exam-scores-tracker/
// Language: javascript
// Runtime: 167 ms
// Memory: 112.8 MB
// Submitted: 2026-01-01

class ExamTracker {
    constructor() {
        this.times = [];
        this.prefixScoreSum = [];
    }

    record(time, score) {
        this.times.push(time);
        this.prefixScoreSum.push((this.prefixScoreSum.at(-1) ?? 0) + score);
    }

    totalScore(startTime, endTime) {
        const L = lowerBound(startTime, this.times);
        const R = upperBound(endTime, this.times) - 1;
        if (L > R) return 0;
        return this.prefixScoreSum[R] - (this.prefixScoreSum[L - 1] ?? 0);
    }
}

function lowerBound(target, arr, lo = 0, hi = arr.length) {
    while (lo < hi) {
        const mid = Math.trunc((lo + hi) / 2);
        if (arr[mid] < target) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    }
    return lo;
}

function upperBound(target, arr, lo = 0, hi = arr.length) {
    while (lo < hi) {
        const mid = Math.trunc((lo + hi) / 2);
        if (arr[mid] <= target) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    }
    return lo;
}
