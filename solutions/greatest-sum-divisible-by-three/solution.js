// Problem: Greatest Sum Divisible by Three
// LeetCode: https://leetcode.com/problems/greatest-sum-divisible-by-three/
// Language: javascript
// Runtime: 28 ms
// Memory: 60.7 MB
// Submitted: 2025-11-23

var maxSumDivThree = function (nums) {
    let sum = 0;
    let r1 = [],
        r2 = [];

    for (let x of nums) {
        sum += x;
        if (x % 3 === 1) r1.push(x);
        else if (x % 3 === 2) r2.push(x);
    }

    r1.sort((a, b) => a - b);
    r2.sort((a, b) => a - b);

    if (sum % 3 === 1) {
        let option1 = r1.length >= 1 ? sum - r1[0] : 0;
        let option2 = r2.length >= 2 ? sum - (r2[0] + r2[1]) : 0;
        return Math.max(option1, option2);
    } else if (sum % 3 === 2) {
        let option1 = r2.length >= 1 ? sum - r2[0] : 0;
        let option2 = r1.length >= 2 ? sum - (r1[0] + r1[1]) : 0;
        return Math.max(option1, option2);
    }

    return sum;
};
