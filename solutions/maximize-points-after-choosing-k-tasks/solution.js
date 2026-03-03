// Problem: Maximize Points After Choosing K Tasks
// LeetCode: https://leetcode.com/problems/maximize-points-after-choosing-k-tasks/
// Language: javascript
// Runtime: 398 ms
// Memory: 102.9 MB
// Submitted: 2025-12-06

/**
 * @param {number[]} technique1
 * @param {number[]} technique2
 * @param {number} k
 * @return {number}
 */
var maxPoints = function (technique1, technique2, k) {
    let a = [];
    let n = technique1.length;
    for (let i = 0; i < n; i++) {
        a.push([technique1[i], technique2[i], technique2[i] - technique1[i]]);
    }

    a.sort((a, b) => b[2] - a[2]);
    // console.log(a);
    let ans = 0;
    for (let i = 0; i < n; i++) {
        let j = n - i;
        if (j === k) {
            ans += a[i][0];
            k--;
        } else {
            let [t1, t2] = a[i];
            if (t1 > t2) {
                ans += t1;
                k--;
            } else {
                ans += t2; 
            }
        }
    }

    return ans;
};

