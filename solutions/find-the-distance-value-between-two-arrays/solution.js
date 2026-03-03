// Problem: Find the Distance Value Between Two Arrays
// LeetCode: https://leetcode.com/problems/find-the-distance-value-between-two-arrays/
// Language: javascript
// Runtime: 77 ms
// Memory: 45 MB
// Submitted: 2023-05-20

// cl = console.log
var findTheDistanceValue = function (a, b, d) {
    let n = a.length;
    a.sort((a, b) => a - b);
    b.sort((a, b) => a - b);
    let c = 0;
    let i = 0, j = 0;
    // cl(a)
    // cl(b)
    // it = 0;
    while (i < n) {
        if (Math.abs(a[i] - b[j]) <= d) {
            // cl(it, "1st", {i,j,c})
            c++;
            i++;
        } else if (a[i] > b[j]) {
            // cl(it, "2nd", {i,j,c})
            j++;
        } else {
            // cl(it, "3rd", {i,j,c})
            i++;
        }
        // it++
    }

    return n - c;
};
