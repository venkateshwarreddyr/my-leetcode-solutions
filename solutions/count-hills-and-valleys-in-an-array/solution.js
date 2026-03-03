// Problem: Count Hills and Valleys in an Array
// LeetCode: https://leetcode.com/problems/count-hills-and-valleys-in-an-array/
// Language: javascript
// Runtime: 70 ms
// Memory: 41.7 MB
// Submitted: 2023-05-30

/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function (a) {
    let n = a.length;
    let c = 0
    // a = [...new Set(a)]
    a = a.reduce((acc, curr) => {
        if (acc[acc.length - 1] !== curr) {
            acc.push(curr)
        }
        return acc
    }, [])
    for (let i = 1; i < n - 1; i++) {
        if (a[i - 1] < a[i] && a[i] > a[i + 1]) {
            c++
        } else if (a[i - 1] > a[i] && a[i] < a[i + 1]) {
            c++
        }
    }

    return c;
};
