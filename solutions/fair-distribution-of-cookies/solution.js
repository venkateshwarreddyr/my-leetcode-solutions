// Problem: Fair Distribution of Cookies
// LeetCode: https://leetcode.com/problems/fair-distribution-of-cookies/
// Language: javascript
// Runtime: 63 ms
// Memory: 42.5 MB
// Submitted: 2023-07-11

cl = console.log
/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
var distributeCookies = function (cookies, k) {
    let an = new Array(k).fill(0)
    let n = cookies.length
    let min = Infinity

    function bt(i) {
        if (i === n) {
            let max = Math.max(...an)
            if (max < min) {
                min = max
            }
            return;
        }

        let cookie = cookies[i];

        for (let j = 0; j < k; j++) {
            if (an[j] + cookie > min) continue;
            if ((j > 0) && (an[j - 1] == an[j])) continue;

            an[j] += cookie
            bt(i + 1)
            an[j] -= cookie
        }
    }
    bt(0)

    return min
};
/**
[8,15,10,20,8]
 8,8,10,15,20
 
 
 */
