// Problem: Maximum Compatibility Score Sum
// LeetCode: https://leetcode.com/problems/maximum-compatibility-score-sum/
// Language: javascript
// Runtime: 423 ms
// Memory: 48.8 MB
// Submitted: 2023-07-12

cl = console.log
/**
 * @param {number[][]} students
 * @param {number[][]} mentors
 * @return {number}
 */
var maxCompatibilitySum = function (students, mentors) {
    let n = students.length
    let maxScore = 0
    function calc(a, b) {
        let score = 0
        for (let i = 0; i < a.length; i++) {
            score += (a[i] === b[i] ? 1 : 0)
        }
        return score
    }
    function bt(set, a) {
        if (a.length === n) {
            let score = 0
            for (let i = 0; i < n; i++) {
                score += calc(students[i], mentors[a[i]])
            }
            maxScore = Math.max(score, maxScore)
            return;
        }

        for (let i = 0; i < n; i++) {
            if (set.has(i)) continue;
            set.add(i)
            a.push(i)
            bt(set, a)
            a.pop()
            set.delete(i)
        }
    }

    bt(new Set(), [])

    return maxScore;
};

/**

    [1,2,3]
      pair
    [4,5,6]

 */
