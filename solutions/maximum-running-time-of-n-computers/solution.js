// Problem: Maximum Running Time of N Computers
// LeetCode: https://leetcode.com/problems/maximum-running-time-of-n-computers/
// Language: javascript
// Runtime: 42 ms
// Memory: 70.8 MB
// Submitted: 2025-12-01



var maxRunTime = function (n, batteries) {
    let lo = 0, hi = batteries.reduce((a, c) => a + c, 0)

    function check(avg) {
        let dur = 0
        for (let e of batteries) {
            dur += Math.min(e, avg)
        }

        return (dur >= avg * n)
    }

    while (lo <= hi) {
        let mid = Math.trunc(lo / 2 + hi / 2)

        if (check(mid)) {
            lo = mid + 1
        } else {
            hi = mid - 1
        }
    }

    return lo - 1

};


/**



 */
