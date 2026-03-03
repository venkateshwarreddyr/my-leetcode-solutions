// Problem: Minimum Recolors to Get K Consecutive Black Blocks
// LeetCode: https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/
// Language: javascript
// Runtime: 66 ms
// Memory: 41.6 MB
// Submitted: 2023-05-24

cl = console.log
var minimumRecolors = function (a, k) {
    let n = a.length;

    let an = a.slice(0, k).replaceAll('B', '').length;
    let min = an;
    let i = 1, j = k;

    while (j < n) {
        if (a[i - 1] === "W") {
            an--
        }

        if (a[j] === "W") {
            an++
        }

        min = Math.min(an, min);

        i++;
        j++
    }

    return min
};
